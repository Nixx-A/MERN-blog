import { model, Schema } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
}, { timestamps: true, versionKey: false })


export default model('Post', postSchema)