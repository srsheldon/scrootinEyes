'use strict';

var getVersion = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, stdout;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return execFile('node', ['--version']);

                    case 2:
                        _ref2 = _context.sent;
                        stdout = _ref2.stdout;

                        console.log(stdout);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getVersion() {
        return _ref.apply(this, arguments);
    };
}();

var getHelp = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _ref4, stdout;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return execFile('./scrootinEyesCli.js', [''], function (error, stdout, stderr) {
                            if (error) {
                                console.error('exec error: ' + error);
                                return;
                            }
                            console.log('stdout: ' + stdout);
                            console.log('stderr: ' + stderr);
                        });

                    case 2:
                        _ref4 = _context2.sent;
                        stdout = _ref4.stdout;

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getHelp() {
        return _ref3.apply(this, arguments);
    };
}();

require('babel-polyfill');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _scrootinEyesCli = require('./scrootinEyesCli');

var _scrootinEyesCli2 = _interopRequireDefault(_scrootinEyesCli);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log("hello testing!");

var someVal = _scrootinEyesCli2.default.newFunctionTest();

_assert2.default.ok(someVal, 'just checking 7');

_assert2.default.deepStrictEqual(someVal, 7, 'expecting 7 to be returned...');

var util = require('util');
var execFile = util.promisify(require('child_process').execFile);

getVersion();

getHelp();

// process.on('help', () => {
//     console.log('--help was called...');
// });


// const { spawn } = require('child_process');
// console.log('getting ready to spawn event...');
// const ls = spawn('node', ['--version']);
// console.log('event spawned!');
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// ls.on('error', (error) => {
//     console.log(`child process error ${error}`);
//   });