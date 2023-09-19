import { model, Schema } from "mongoose";

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bio: String,
  github: String,
  location: String,
  website: String,
  skills: String,
  learning: String,
  available_for: String,
  work: String,
  education: String,
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
})

export default model('Profile', profileSchema)