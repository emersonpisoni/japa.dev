import { assert } from '@japa/assert'
import { expectTypeOf } from '@japa/expect-type'
import { configure, processCLIArgs, run } from '@japa/runner'
import { TestContext } from '@japa/runner/core'
import { logReporter } from './reporters.js'

TestContext.macro('jsonEqual', function (a: unknown, b: unknown) {
  this.assert.deepEqual(JSON.stringify(a), JSON.stringify(b))
})

processCLIArgs(process.argv.splice(2))

configure({
  files: ['tests/**/*.spec.ts'],
  plugins: [
    assert(),
    expectTypeOf(),
  ],
  reporters: {
    activated: ['logReporter'],
    list: [{ name: 'logReporter', handler: logReporter() }],
  },
})

run()

// just node
// Naturally TS