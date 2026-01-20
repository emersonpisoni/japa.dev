import { test } from '@japa/runner'
import sinon from 'sinon'
import { EmailClient } from '../../src/email.js'
import { registerUser } from '../../src/user-service.js'

test('registerUser() sends a welcome email (sinon stub)', async ({ assert }) => {
  const stub = sinon.stub(EmailClient, 'sendEmail').resolves()

  const user = await registerUser('a@b.com')

  assert.equal(user.email, 'a@b.com')
  assert.isTrue(stub.calledOnce)
  assert.deepEqual(stub.firstCall.args, ['a@b.com', 'Welcome!'])

  stub.restore()
})
