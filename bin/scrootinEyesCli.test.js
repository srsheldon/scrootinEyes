'use strict';
//import 'babel-polyfill';
const ASSERT = require('assert'),
CHILD_PROCESS = require('child_process'),
UTIL = require('util'),
EXEC_FILE = UTIL.promisify(CHILD_PROCESS.execFile),
SCROOTINEYES_CLI = require('./scrootinEyesCli');


async function getVersion() {
  const { stdout } = await EXEC_FILE('node', ['--version']);
  console.log(stdout);
}
getVersion();

/*async function getHelp() {
    const {stdout} = await EXEC_FILE('./node_modules/.bin/babel-node', ['./scrootinEyesCli.js'], (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    //console.log(stdout);
}
getHelp();*/

const helpTest = CHILD_PROCESS.spawn('./scrootinEyesCli.js', ['--help'])

helpTest.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  helpTest.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  helpTest.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });


