#!/usr/bin/env node

const {createReadStream} = require('fs')

const readStream = createReadStream('names.txt')

readStream.pipe(process.stdout)

readStream.on('data', (buffer) => {
  readStream.pause()
  process.stdout.write(buffer.toString())
})

const timer = setInterval(() => readString.resume(), 1000)

readStream.on('end', () => {
  clearInterval(timer)
})
