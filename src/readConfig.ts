import fs from 'fs';
import util from 'util';
import path from 'path';

const readFile = util.promisify(fs.readFile);

const configFilePath = path.join(__dirname, 'config', 'index.json');

export default async function () {
    const data = await readFile(configFilePath, 'utf8');

    return JSON.parse(data);
}
