
import fs from 'fs';
import { Console } from 'console';
/**
 * @module seLogger
 * @borrows console
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

