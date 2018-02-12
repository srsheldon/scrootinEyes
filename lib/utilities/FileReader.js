import fs from 'fs';
/**
 * @module fileReader
 * @class
 */


export default class FileReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    get fileOutput() {
        return this.readTheFile();
    }

    readTheFile() {
        return fs.readFile(this.filePath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
}
