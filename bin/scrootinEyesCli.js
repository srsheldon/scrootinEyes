#!/usr/bin/env node

import fs from 'fs';
import eventEmitter from 'events';
import util from 'util';
import FileReader from '../lib/utilities/FileReader';

/*
const FS = require('fs'),
EVENT_EMITTER = require('events'),
UTIL = require('util'),
DEBUGLOG = UTIL.debuglog('scrootinEyesCli'),
*/
const DEBUGLOG = util.debuglog('scrootinEyesCli');
const RIGHT_POINTING_MAGNIFYING_GLASS_EMOJI = '\uD83D\uDD0E';
// String literal of the scrootinEyes logo for welcoming the user 🤗
const SCROOTINEYES_LOGO_STRING_LITERAL = `
                          _   _       ______
                         | | (_)     |  ____|
 ___  ___ _ __ ___   ___ | |_ _ _ __ | |__  _   _  ___  ___
/ __|/ __| '__/   \\ /   \\| __| | '_ \\|  __|| | | |/ _ \\/ __|
\\__ \\ (__| | |   * |   * | |_| | | | | |___| |_| |  __/\\__ \\
|___/\\___|_| /\\___/ \\___/ \\__|_|_| |_|______\\__, |\\___||___/
            //                              __/ /
           //                              |___/
`;
console.info(SCROOTINEYES_LOGO_STRING_LITERAL);
console.info(`${RIGHT_POINTING_MAGNIFYING_GLASS_EMOJI}  lets scrootinEyes some code!`);
// currently running file using:$ ./node_modules/.bin/babel-node ./bin/scrootinEyesCli.js ./lib

const testFileReader = new FileReader('bin/testFile.txt');

console.log(testFileReader.fileOutput);

export default { SCROOTINEYES_LOGO_STRING_LITERAL };
