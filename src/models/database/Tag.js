import { model, Schema } from 'mongoose'

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    
  },
  //post: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
}, { versionKey: false })

export default model('Tag', tagSchema)