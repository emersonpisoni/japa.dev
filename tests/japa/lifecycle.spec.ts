import { test } from "@japa/runner"

test.group('Lifecycle', (group) => {
  group.each.setup(async () => {
    console.log("Before tests")
  })

  group.each.teardown(async () => {
    console.log("After tests")
  })

  test('query works', async ({ assert }) => {
    console.log("Running test")
    assert.equal(1 + 1, 2)
  })
})
