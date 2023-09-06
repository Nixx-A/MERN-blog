import { model, Schema } from "mongoose";

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bio: String,
  social_links: {
    facebook: String,
    instagram: String,
    twitter: String,
    github: String,
    youtube: String,
  },
  avatar: String,
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
})

export default model('Profile', profileSchema)