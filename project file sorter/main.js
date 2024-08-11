import fs from 'node:fs/promises';
import nodePath from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

const outputDir = __dirname + "/output/";
const inputDir = __dirname + "/input/";
let outputExt = [];

//getting paths
const paths = await fs.readdir(inputDir);

//looping through paths to copy files
paths.forEach(async path => {
    //getting extension
    const ext = nodePath.extname(path).replace(".", "");
    //check if dir exists, if true then do nothing
    try {
        await fs.access(outputDir + ext, fs.constants.R_OK)
    } catch {
        //if not create one
        await fs.mkdir(outputDir + ext, { recursive: true });
    }
    //moving files
    await fs.copyFile(inputDir + path, outputDir + ext + "\\" + path)
})