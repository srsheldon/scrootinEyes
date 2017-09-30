#!/usr/bin/env node
'use strict';
import fs from 'fs';
const RIGHT_POINTING_MAGNIFYING_GLASS_EMOJI = "\uD83D\uDD0E";
//String literal of the scrootinEyes logo for welcoming the user 🤗
const SCROOTINEYES_LOGO_STRING_LITERAL = '\
                           _   _       ______                     \n \
                         | | (_)     |  ____|                     \n \
 ___  ___ _ __ ___   ___ | |_ _ _ __ | |__  _   _  ___  ___       \n \
/ __|/ __| \'__/   \\ /   \\| __| | \'_ \\|  __|| | | |/ _ \\/ __|\n \
\\__ \\ (__| | |   * |   * | |_| | | | | |___| |_| |  __/\\__ \\  \n \
|___/\\___|_| /\\___/ \\___/ \\__|_|_| |_|______\\__, |\\___||___/\n \
            //                              __/ /                 \n \
           //                              |___/                  \n\n';


 console.log(SCROOTINEYES_LOGO_STRING_LITERAL);
//currently running file using:$ ./node_modules/.bin/babel-node ./bin/scrootinEyesCli.js ./lib
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

//slice the first two items in the argv array becasuse the first item in the array is the process.execPath
//(path from where node is executed). The second element will be the path to the JavaScript file being executed.
//The remaining elements will be any additional command line arguments.
 var argv = process.argv.slice(2);
 var help = "usage: scrootinEyesCli [options] \n\n" + "Searches files for TODO, FIXME or OPTIMISE tags within your project,\n" + "displaying the line number and file name along with the tag description\n"+ "options:\n" + "[directory_name] # Optional parameter, will run from current directory\n" + "-h, [--help] # Show this help message and quit";
 var tasks = {};
 tasks.help = function(){
     console.log(help);
};


var checkFile = function(f){
    // create a pattern to match on
    var pattern = /(todo|fixme|optimise|optimize)\W*(.*$)/i;
    var items = [];
    var lineNumber = 1;
    var file;
    var match;
    file = fs.readFileSync(f).toString().split('\n');
    file.forEach(function (line) {
        if(match = line.match(pattern)) {
            items.push(" * [" + lineNumber.toString() + "] " + match[1].toUpperCase() + ": " + match[2]);
        } lineNumber++;
    });
    if(items.length > 0) {
        // Output the file name
        console.log(f);
        // Output the matches
        items.forEach(function(item) {
            console.log(item);
        });
    }
};

tasks.search = function (dir, action) {
    // Assert that it's a function
    if (typeof action !== "function") action = function (error, file) { };
    // Read the directory
    fs.readdir(dir, function (err, list) {
        // Return the error if something went wrong
        if (err) return action(err);
        // For every file in the list
        list.forEach(function (file) {
            // Full path of that file
            var path = dir + "/" + file;
            // Get the file's stats
            fs.stat(path, function (err, stat) {
                console.log(path + " is a file? " + stat.isFile());
                // If the item is a directory
                if (stat && stat.isDirectory()) {
                    tasks.search(path, action);
                } else if (stat && stat.isFile()) {
                    checkFile(path);
                } else {
                    action(null, path);
                }
            });
        });
    });
};


// If no arguments are passed, pass the current directory
if(typeof argv[0] === "undefined" || argv[0] === null) {
    argv[0] = ".";
}

if(argv[0] === "--help" || argv[0] === "-h") {
    tasks.help();
} else {
    tasks.search(argv[0]);
}
