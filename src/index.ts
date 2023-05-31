import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';
import readConfig from './readConfig';
import createAndSaveFile from './createAndSaveFile';
import arguments from './readArguments';
import { capitalizeFirstLetter as cfl } from './helpers';

console.log('arguments', arguments.key);

const keyName: string = arguments.key;
const resource: string = arguments.resource;

const view = {
    title: 'Joe',
    calc: () => 2 + 4,
};

async function main() {
    const config = await readConfig();
    const rootDir = config.rootDir;
    if (!rootDir) {
        throw new Error('Missing rootDir');
    }
    // TODO: Check key in config
    if (!keyName) {
        throw new Error('Missing keyName');
    }
    if (!resource) {
        throw new Error('Missing resource');
    }

    const configKey = config.key[keyName];

    const destinationPath = configKey.destinationPath;
    const templatePath = configKey.templatePath;
    const prefixFileName = configKey.prefixFileName;
    const suffixFileName = configKey.suffixFileName;
    const extFileName = configKey.extFileName;

    const template = fs.readFileSync(
        path.join(__dirname, templatePath),
        'utf8'
    );

    //Read file json

    const templateParameters = {};
    const content = Mustache.render(template, templateParameters);

    const fileName = `${prefixFileName}${cfl(
        resource
    )}${suffixFileName}${extFileName}`;
    console.log('fileName', fileName);

    const filePath = path.join(rootDir, destinationPath, fileName);

    createAndSaveFile(content, filePath);
}

main();
