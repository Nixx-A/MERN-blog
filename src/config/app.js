import express from 'express'
import morgan from 'morgan'
import postRoutes from '../routes/post.routes.js'
import profileRoutes from '../routes/profile.routes.js'
import authRoutes from "../routes/auth.routes.js";
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

app.use('/api/post', postRoutes)
app.use('/settings', profileRoutes)
app.use('/api/auth', authRoutes)



export default app