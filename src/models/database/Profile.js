import { model, Schema } from "mongoose";

const profileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bio: String,
  github: String,
  avatar: String,
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
})

export default model('Profile', profileSchema)