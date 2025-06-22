import { SignJWT, jwtVerify, JWTVerifyResult } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET || 'your-very-secure-secret')

interface JWTPayload {
  iat?: number
  exp?: number
}

export async function generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1h')
    .sign(SECRET_KEY)
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload }: JWTVerifyResult = await jwtVerify(token, SECRET_KEY)
    return payload 
  } catch (error) {
    console.error('Error verifying token:', error)
    return null
  }
}
