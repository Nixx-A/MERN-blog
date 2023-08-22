import app from './config/app.js'
import { connectDB } from './config/db.js'


connectDB()
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})