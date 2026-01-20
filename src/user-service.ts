import { EmailClient } from './email.js'

export async function registerUser(email: string) {
  await EmailClient.sendEmail(email, 'Welcome!')
  return { id: 'user_123', email }
}
