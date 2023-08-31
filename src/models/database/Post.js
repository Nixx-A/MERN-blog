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
      comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
      tags: [{ type: Schema.Types.ObjectId, ref: 'Tag', validator: function (tags) {
        return tags.length <= 4
      }, MessageChannel: 'You can add up to 4 tags' }]
    },
    { timestamps: true, versionKey: false }
  )

  export default model('Post', postSchema)
