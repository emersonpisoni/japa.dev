import { test } from '@japa/runner'
import assert from 'node:assert/strict'
import { createServer } from '../../src/server.js'

function listen(server: ReturnType<typeof createServer>) {
  return new Promise<{ port: number }>((resolve) => {
    server.listen(0, () => {
      const address = server.address()
      if (typeof address === 'object' && address?.port) resolve({ port: address.port })
    })
  })
}

function request(url: string) {
  return fetch(url).then(async (r) => ({
    status: r.status,
    json: await r.json(),
  }))
}

test('GET /health returns 200 and { ok: true }', async () => {
  const server = createServer()
  const { port } = await listen(server)

  try {
    const res = await request(`http://127.0.0.1:${port}/health`)
    assert.equal(res.status, 200)
    assert.deepEqual(res.json, { ok: true })
  } finally {
    server.close()
  }
})
