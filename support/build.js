#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var preprocessor = require('./preprocessor')

var outputDir = process.argv[2]
var files = process.argv.slice(3)

files.forEach(function(filepath) {
  var filename = path.basename(filepath)
  var src = fs.readFileSync(filepath, {encoding: 'utf8'})

  var output = preprocessor.process(src, filepath)

  var outputFilepath = path.join(outputDir, filename)

  fs.writeFileSync(outputFilepath, output, {encoding: 'utf8'})
})
