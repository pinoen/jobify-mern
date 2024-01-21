import { StatusCodes } from "http-status-codes"
import userModel from "../models/userModel.js"

export const getCurrentUser = async (req, res) => {
  const user = await userModel.findOne({ _id: req.user.userId })
  const userWithoutPassword = user.toJSON()
  res.status(StatusCodes.OK).json({ user: userWithoutPassword })
}

export const getAppStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'app stats' })
}

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'update user' })
}