import {model, Schema } from 'mongoose'

const tagSchema = new Schema({
  name: String,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
})

export default model('Tag', tagSchema)