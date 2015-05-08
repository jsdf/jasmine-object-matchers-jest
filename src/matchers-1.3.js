let objectMatchers = require('./objectMatchers')

module.exports = {
  toContainKeys(expected) {
    let {pass, message} = objectMatchers.toContainKeys(this.actual, expected)
    this.message = () => message
    return pass
  },
  toContainValues(expected) {
    let {pass, message} = objectMatchers.toContainValues(this.actual, expected)
    this.message = () => message
    return pass
  },
}
