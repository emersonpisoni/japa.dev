import { test } from '@japa/runner'
import assert from 'node:assert/strict'

test.group('Math operations', (group) => {
  let value = 0

  group.each.setup(() => {
    value = 10
  })

  test('setup runs before each test', () => {
    assert.equal(value, 10)
  })

  test('value can be changed per test', () => {
    value += 5
    assert.equal(value, 15)
  })
})
