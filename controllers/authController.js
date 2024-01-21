import { StatusCodes } from "http-status-codes"
import userModel from "../models/userModel.js"
import { hashPassword } from "../utils/passwordUtils.js"

export const register = async (req, res) => {
  const isFirstAccount = (await userModel.countDocuments()) === 0
  req.body.role = isFirstAccount ? 'admin' : 'user'

  const hashedPassword = await hashPassword(req.body.password)
  req.body.password = hashedPassword

  const user = await userModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ msg: 'user created' })
}

export const login = async (req, res) => {
  res.send('login')
}