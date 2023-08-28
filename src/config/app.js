import express from 'express'
import morgan from 'morgan'
import postRoutes from '../routes/post.routes.js'
import profileRoutes from '../routes/profile.routes.js'
import authRoutes from "../routes/auth.routes.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/post', postRoutes)
app.use('/settings', profileRoutes)
app.use('/api/auth', authRoutes)



export default app