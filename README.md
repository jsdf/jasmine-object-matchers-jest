Jasmine Object Matchers
================

Custom object equality matchers for use with **[Jasmine 1.3](http://jasmine.github.io/1.3/introduction.html)**/**[Jest](https://facebook.github.io/jest/)**, and **[Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)**.

It's a fork of [bvaughn/jasmine-object-matchers](https://github.com/bvaughn/jasmine-object-matchers) primarily intended at use with Jest, though they should work in any Jasmine environment (provided you load the correct version of the matchers).

# Installing

`npm install jasmine-object-matchers-jest --save-dev`

Add the matchers to your testing environment with:

**Jest/Jasmine 1.3**

```js
// Jest: in your `setupTestFramework` script
jasmine.getEnv().beforeEach(function() {
  this.addMatchers(require('jasmine-object-matchers-jest')['1.3'])
})
```

**Jasmine 2.0**

```js
beforeEach(function() {
  jasmine.addMatchers(require('jasmine-object-matchers-jest')['2.0'])
})
```

# Matchers

The following matchers allow simple assertions to be made against an Objects keys or key-value pairs.

### toContainKeys

Verifies that an Object contains a minimum set of specified keys. These keys can be provided in the form of an Array:
```js
expect({foo: 1, bar: 2}).toContainKeys(['foo'])
```

Or an object:
```js
expect({foo: 1, bar: 2}).toContainKeys({bar: 2})
```

Additional keys beyond the ones specified are ignored.

### toContainValues

Verifies that an Object contains a minimum set of specified key-value pairs.
```js
expect({foo: 1, bar: 2}).toContainValues({foo: 1})
```

Additional keys beyond the ones specified are ignored.
