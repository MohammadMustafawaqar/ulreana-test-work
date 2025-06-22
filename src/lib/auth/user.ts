import bcrypt from 'bcryptjs'

export const USER_CREDENTIALS = {
  username: 'admin',
  // Password is 'admin123'
  passwordHash: bcrypt.hashSync('admin123', 10),
}
