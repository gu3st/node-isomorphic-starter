//Our globals
global.APP_PATH = require('path').resolve(__dirname+"/src")
global.TLS_PATH = require('path').resolve(__dirname+"/tls");
global.DIST_PATH = require('path').resolve(__dirname+"/dist");

require('./src/Main').Run(); 