import { StatusCodes } from "http-status-codes"
import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from "../utils/passwordUtils.js"
import { UnauthenticatedError } from "../errors/customErrors.js"

export const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0
  req.body.role = isFirstAccount ? 'admin' : 'user'

  const hashedPassword = await hashPassword(req.body.password)
  req.body.password = hashedPassword

  const user = await userModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email })
  if (!user) throw new UnauthenticatedError('invalid credentials')

  const isPasswordOk = await comparePassword(req.body.password, user.password)
  if (!isPasswordOk) throw new UnauthenticatedError('invalid credentials')

  res.send('login')
}