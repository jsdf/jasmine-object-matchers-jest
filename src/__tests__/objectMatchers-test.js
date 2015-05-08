jest.dontMock('../objectMatchers')

const isObject = (obj) => obj && typeof obj == 'object'
const resultMatchers = {
  toPass() {
    return isObject(this.actual) && this.actual.pass === true
  },
  toFail() {
    return isObject(this.actual) && this.actual.pass === false
  },
}

describe('toContainKeys', function() {
  let toContainKeys

  beforeEach(function() {
    this.addMatchers(resultMatchers)
    toContainKeys = require('../objectMatchers').toContainKeys
  })

  it('should accept valid Objects with keys', function() {
    let object = {
      foo: 1,
      bar: 2,
    }

    expect(toContainKeys(object, {foo: null})).toPass()
    expect(toContainKeys(object, {bar: null})).toPass()
    expect(toContainKeys(object, {foo: null, bar: null})).toPass()
  })

  it('should accept valid Arrays with keys', function() {
    let object = {
      foo: 1,
      bar: 2,
    }

    expect(toContainKeys(object, ['foo'])).toPass()
    expect(toContainKeys(object, ['bar'])).toPass()
    expect(toContainKeys(object, ['foo', 'bar'])).toPass()
  })

  it('should reject invalid Objects with keys', function() {
    expect(toContainKeys({foo: 1}, {bar: 1})).toFail()
  })
})

describe('toContainValues', function() {
  let toContainValues

  beforeEach(function() {
    this.addMatchers(resultMatchers)
    toContainValues = require('../objectMatchers').toContainValues
  })

  it('should accept valid Objects', function() {
    let object = {
      foo: 1,
      bar: 2,
    }

    expect(toContainValues(object, {foo: 1})).toPass()
    expect(toContainValues(object, {bar: 2})).toPass()
    expect(toContainValues(object, {foo: 1, bar: 2})).toPass()
  })

  it('should reject missing keys', function() {
    expect(toContainValues({foo: 1}, {bar: 1})).toFail()
  })

  it('should reject keys with incorrect values', function() {
    expect(toContainValues({foo: 1}, {foo: 2})).toFail()
  })
})

