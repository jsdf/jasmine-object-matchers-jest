function assertObject(obj) {
  if (!(obj && typeof obj === 'object')) {
    throw new Error('object expected')
  }
}

function toContainKeys(object, keys) {
  let pass = true
  let message

  assertObject(object)

  if (!Array.isArray(keys)) {
    keys = Object.keys(keys)
  }

  keys.find(function(key) {
    if (!object.hasOwnProperty(key)) {
      message = 'Expected object to contain key:' + key
      pass = false

      return true
    }
  })

  return {pass, message}
}

function toContainValues(actualObject, expectedObject) {
  let pass = true
  let message

  assertObject(actualObject)
  assertObject(expectedObject)

  Object.keys(expectedObject).find((key) => {
    if (actualObject[key] !== expectedObject[key]) {
      message = 'Expected object to contain "' + expectedObject[key] + '" at "' + key + '" but contained "' + actualObject[key] + '"'
      pass = false

      return true
    }
  })
  return {pass, message}
}

module.exports = {toContainKeys, toContainValues}
