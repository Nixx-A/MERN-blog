import { model, Schema } from 'mongoose'

const commentSchema = new Schema({
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
}, { timestamps: true, versionKey: false })

export default model('Comment', commentSchema)