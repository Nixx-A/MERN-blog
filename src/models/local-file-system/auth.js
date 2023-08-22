import bcrypt from 'bcryptjs'
import User from '../database/User.js'
import { createAccessToken } from '../../libs/jtw.js'

export class AuthModel {
  static async register ({ username, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })

    const userSaved = await newUser.save()
    const token = await createAccessToken({ id: userSaved._id })

    const user = {
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      data_registered: userSaved.data_registered
    }

    return { user, token }
  }

  static async login ({ email, password }) {
    const userFound = await User.findOne({ email })
    const isMatch = await bcrypt.compare(password, userFound.password)
    const token = await createAccessToken({ id: userFound._id })

    const user = {
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      data_registered: userFound.data_registered
    }
    return { user, token, isMatch }
  }
}