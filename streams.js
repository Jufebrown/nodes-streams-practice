#!/usr/bin/env node

const {createReadStream} = require('fs')

const readStream = createReadStream('names.txt')

readStream.pipe(process.stdout)
