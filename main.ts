import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function readJpegDimensions(data: Buffer): { width: number; height: number } {
  if (data.length < 4 || data[0] !== 0xff || data[1] !== 0xd8) {
    throw new Error("Output is not a JPEG: missing start-of-image marker.");
  }

  let offset = 2;
  while (offset < data.length) {
    if (data[offset] !== 0xff) {
      throw new Error("Invalid JPEG: expected a segment marker.");
    }
    // JPEG permits repeated 0xff padding bytes before a marker.
    while (offset < data.length && data[offset] === 0xff) offset++;
    if (offset >= data.length) break;

    const marker = data[offset++];
    if (marker === 0xda || marker === 0xd9) break;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;

    if (offset + 2 > data.length) {
      throw new Error("Invalid JPEG: truncated segment length.");
    }
    const segmentLength = data.readUInt16BE(offset);
    if (segmentLength < 2 || offset + segmentLength > data.length) {
      throw new Error("Invalid JPEG: segment length is out of bounds.");
    }

    // Start-of-frame markers contain dimensions; C4, C8 and CC do not.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      if (segmentLength < 8) {
        throw new Error("Invalid JPEG: truncated start-of-frame segment.");
      }
      return {
        width: data.readUInt16BE(offset + 5),
        height: data.readUInt16BE(offset + 3),
      };
    }
    offset += segmentLength;
  }

  throw new Error("Invalid JPEG: no start-of-frame dimensions found.");
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(scriptDirectory, "entry.png");
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || "./output");
const outputFile = join(outputDirectory, "entry.png");

if (outputFile === sourceFile) {
  throw new Error("Choose an output directory different from the source directory.");
}

const sourceBytes = await readFile(sourceFile);
await mkdir(outputDirectory, { recursive: true });
await copyFile(sourceFile, outputFile);

const outputBytes = await readFile(outputFile);
if (!outputBytes.equals(sourceBytes)) {
  throw new Error(`Copy verification failed: ${outputFile} is not byte-identical to ${sourceFile}.`);
}
const { width, height } = readJpegDimensions(outputBytes);
if (width !== 1024 || height !== 1024) {
  throw new Error(`Expected a 1024x1024 JPEG, got ${width}x${height}: ${outputFile}`);
}

console.log(`Wrote ${outputFile}: verified JPEG ${width}x${height}, ${outputBytes.length} bytes.`);
