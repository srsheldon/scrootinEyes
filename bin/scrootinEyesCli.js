#!/usr/bin/env node
'use strict';
import fs from 'fs';
import eventEmitter from 'events';
import util from 'util';

/*const FS = require('fs'),
EVENT_EMITTER = require('events'),
UTIL = require('util'),
DEBUGLOG = UTIL.debuglog('scrootinEyesCli'),*/
const DEBUGLOG = util.debuglog('scrootinEyesCli'),
RIGHT_POINTING_MAGNIFYING_GLASS_EMOJI = "\uD83D\uDD0E",
//String literal of the scrootinEyes logo for welcoming the user 🤗
SCROOTINEYES_LOGO_STRING_LITERAL = '\
                           _   _       ______                     \n \
                         | | (_)     |  ____|                     \n \
 ___  ___ _ __ ___   ___ | |_ _ _ __ | |__  _   _  ___  ___       \n \
/ __|/ __| \'__/   \\ /   \\| __| | \'_ \\|  __|| | | |/ _ \\/ __|\n \
\\__ \\ (__| | |   * |   * | |_| | | | | |___| |_| |  __/\\__ \\  \n \
|___/\\___|_| /\\___/ \\___/ \\__|_|_| |_|______\\__, |\\___||___/\n \
            //                              __/ /                 \n \
           //                              |___/                  \n\n';


console.info(SCROOTINEYES_LOGO_STRING_LITERAL);
//currently running file using:$ ./node_modules/.bin/babel-node ./bin/scrootinEyesCli.js ./lib

export default {SCROOTINEYES_LOGO_STRING_LITERAL};
