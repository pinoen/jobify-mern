import jwt from 'jsonwebtoken'

export const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })

  return token
}

export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_KEY)
  return decoded
}