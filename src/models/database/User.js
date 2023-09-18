import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String, // You can use 'String' to store the URL of the image file
    default: 'default-avatar.jpg', // Default avatar image file name or URL
  },
  data_registered: { type: Date, default: Date.now }
}, { versionKey: false })

userSchema.virtual('posts', {
  ref: 'Post', // Reference to the Post model
  localField: '_id',
  foreignField: 'author',
});


export default model('User', userSchema)