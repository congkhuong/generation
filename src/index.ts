import fs from 'fs';
import path from 'path';
import Mustache from 'mustache';

const view = {
    title: 'Joe',
    calc: () => 2 + 4,
};

function createAndSaveFile(content: string, filePath: string) {
    fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating directory:', err);
        } else {
            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.error('Error creating file:', err);
                } else {
                    console.log('File created successfully.');
                }
            });
        }
    });
}

const content = Mustache.render('{{title}} spends {{calc}}', view);
const filePath = path.join(__dirname, 'folder', 'text.txt');

createAndSaveFile(content, filePath);
console.log('content', content);
