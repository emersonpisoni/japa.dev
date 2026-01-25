import { test } from '@japa/runner'
import assert from 'node:assert/strict'
import { add } from '../../src/math.js'

test('add() returns the sum of two numbers', () => {
  assert.equal(add(1, 1), 2)
})
