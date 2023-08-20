import User from '../models/database/User.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jtw.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export class AuthController {
  static async register(req, res) {
    const { username, email, password } = req.body
    try {
      const userFound = await User.findOne({ email })
      if (userFound)
        return res.status(400).json({ message: 'User already exists' })

      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = new User({ username, email, password: hashedPassword })

      const userSaved = await newUser.save()
      const token = await createAccessToken({ id: userSaved._id })
      res.cookie('token', token)

      res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        data_registered: userSaved.data_registered
      })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  static async login(req, res) {
    const { email, password } = req.body

    try {
      const userFound = await User.findOne({ email })
      if (!userFound) return res.status(400).json({ message: 'User not found' })

      const isMatch = await bcrypt.compare(password, userFound.password)
      if (!isMatch)
        return res.status(400).json({ message: 'Invalid credentials' })

      const token = await createAccessToken({ id: userFound._id })
      res.cookie('token', token)

      res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        data_registered: userFound.data_registered
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async logout(req, res) {
    res.clearCookie('token')
    res.json({ message: 'Logged out' })
  }

  static async verifyToken(req, res) {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: 'Unauthorized' })
    console.log(token)

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

  static async profile(req, res) {
    res.json({ message: 'Is working well' })
  }
}
