import fs from 'fs';
import path from 'path';

export default function createAndSaveFile(content: string, filePath: string) {
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
