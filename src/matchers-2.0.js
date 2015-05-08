let {toContainKeys, toContainValues} = require('./objectMatchers')

module.exports = {
  toContainKeys() {
    return {compare: toContainKeys}
  },
  toContainValues() {
    return {compare: toContainValues}
  },
}
