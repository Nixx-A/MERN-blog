import User from '../models/database/User.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/config.js'
import { AuthModel } from "../models/local-file-system/auth.js";

export class AuthController {
  static async register (req, res) {
    const { username, email, password } = req.body
    try {
      const userFound = await User.findOne({ email })
      if (userFound) return res.status(400).json({ message: 'User already exists' })

      const { user, token } = await AuthModel.register({ username, email, password })
      res.cookie('token', token)
      res.json(user)
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async login (req, res) {
    const { email, password } = req.body
    try {
      const { user, token, isMatch } = await AuthModel.login({ email, password })
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

      res.cookie('token', token)
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async logout (_, res) {
    res.clearCookie('token')
    res.json({ message: 'Logged out' })
  }

  static async verifyToken (req, res) {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(token, TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' })

      const userFound = await User.findById(decoded.id)
      if (!userFound) return res.status(401).json({ message: 'Unauthorized' })

      res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
      })
    })
  }

  static async profile (req, res) {
    res.json({ message: 'Is working well' })
  }
}
