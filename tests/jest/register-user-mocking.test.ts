import { registerUser } from '../../src/user-service.js'
import * as Email from '../../src/email.js'

jest.spyOn(Email, 'sendEmail').mockResolvedValue()

test('registerUser() sends a welcome email (jest spy)', async () => {
  const user = await registerUser('a@b.com')

  expect(user.email).toBe('a@b.com')
  expect(Email.sendEmail).toHaveBeenCalledTimes(1)
  expect(Email.sendEmail).toHaveBeenCalledWith('a@b.com', 'Welcome!')
})
