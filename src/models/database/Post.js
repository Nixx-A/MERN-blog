import { model, Schema } from 'mongoose'

const postSchema = new Schema(
  {
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
    image: {
      url: String,
      public_id: String
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
  },
  { timestamps: true, versionKey: false }
)

export default model('Post', postSchema)
