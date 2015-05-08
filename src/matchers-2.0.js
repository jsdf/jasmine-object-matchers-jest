let objectMatchers = require('./objectMatchers')

module.exports = {
  toContainKeys() {
    return {compare: objectMatchers.toContainKeys}
  },
  toContainValues() {
    return {compare: objectMatchers.toContainValues}
  },
}
