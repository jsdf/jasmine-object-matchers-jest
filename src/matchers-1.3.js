let {toContainKeys, toContainValues} = require('./objectMatchers')

module.exports = {
  toContainKeys(expected) {
    let {pass, message} = toContainKeys(this.actual, expected)
    if (!pass) console.error(message)
    return pass
  },
  toContainValues(expected) {
    let {pass, message} = toContainValues(this.actual, expected)
    if (!pass) console.error(message)
    return pass
  },
}
