var fs = require('fs')
var os = require('os')
var path = require('path')
var crypto = require('crypto')

var pkg = require('../package.json')

var TMPDIR = path.join(os.tmpdir(), pkg.name + '-sourcemaps')
if (!fs.existsSync(TMPDIR)) fs.mkdirSync(TMPDIR)

function sourceMapPath(srcpath) {
  return path.join(TMPDIR, crypto.createHash('md5').update(srcpath).digest('hex') + '.map')
}

sourceMapPath.TMPDIR = TMPDIR

module.exports = sourceMapPath
