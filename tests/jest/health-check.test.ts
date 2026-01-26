import request from 'supertest'
import { createServer } from '../../src/server.js'

test('GET /health returns 200 and { ok: true }', async () => {
  const server = createServer()
  await request(server)
    .get('/health')
    .expect(200)
    .expect({ ok: true })
})
