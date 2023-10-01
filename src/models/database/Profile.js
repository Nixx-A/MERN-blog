import { model, Schema } from 'mongoose'

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  bio: String,
  username: String,
  email: String,
  github: String,
  profile_image: String,
  location: String,
  website_url: String,
  skills: String,
  currently_learning: String,
  available_for: String,
  theme: { type: String, enum: ['dark', 'light'], default: 'light' },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { versionKey: false })

export default model('Profile', profileSchema)
