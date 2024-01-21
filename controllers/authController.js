import { StatusCodes } from "http-status-codes"
import userModel from "../models/userModel.js"

export const register = async (req, res) => {
  const user = await userModel.create(req.body)
  res.status(StatusCodes.CREATED).json({ user })
}

export const login = async (req, res) => {
  res.send('login')
}