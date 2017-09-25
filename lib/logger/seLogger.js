//======================================================================================================================
//Imports:
//* fs - node class used to manibulate the file system (read and write files)
//* Console - the Console constructor from the node console class used to create custom consoles
//======================================================================================================================
import fs from 'fs';
import {Console} from 'console';
/**
 * 
 * @borrows 
 * 
 */
//
const output = fs.createWriteStream('./stdout.log');
//
const errorOutput = fs.createWriteStream('./stderr.log');
// custom simple logger
const esLogger = new Console(output, errorOutput);
// use it like console
const count = 5;
esLogger.log('count: %d', count);