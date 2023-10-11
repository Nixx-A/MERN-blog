import Comment from '../models/database/Comment.js'

export class CommentController {
  static async createComment (req, res) {
    const { comment } = req.body
    console.log(req.body);
    try {
      if (!comment) return res.status(400).json({ message: 'Text is required' })

      const newComment = await Comment.create({
        comment,
        author: req.user.id,
        post: req.params.postId
      })
      console.log(newComment)
      const savedComment = await newComment.save()

      res.json(savedComment)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getComments (req, res) {
    console.log(req.params.postId);
    try {
      const comments = await Comment.find({ post: req.params.postId }).populate(
        'author'
      )
      res.json(comments)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async deleteComment (req, res) {
    const { commentId } = req.params
    console.log(commentId);
    try {
      const comment = await Comment.findByIdAndDelete(commentId)
      console.log(comment);
      if (!comment) return res.status(404).json({ message: 'Comment not found' })

      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
