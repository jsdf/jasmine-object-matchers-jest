var fs = require('fs')
var sourceMapSupport = require('source-map-support')
var absolutePath = require('absolute-path')
var sourceMapPath = require('./sourceMapPath')

sourceMapSupport.install({
  retrieveSourceMap: function(srcpath) {
    if (srcpath.indexOf('node_modules') > -1) return
    if (!absolutePath(srcpath)) return

    try {
      var map = fs.readFileSync(sourceMapPath(srcpath), 'utf8')
      if (map) return {map: map}
    } catch (err) {
      console.error(err.code + ' when loading sourcemap for ' + srcpath)
    }
  },
})
