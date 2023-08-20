import Post from "../models/database/Post.js";

export class PostController {
  static async getPosts (req, res) {
    try {
      const posts = await Post.find({ author: req.user.id }).populate('author');
      res.json(posts)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getPost (req, res) {
    const { id } = req.params
    try {
      const post = await Post.findById(id)
      if (!post) return res.status(404).json({ message: 'Post not found' })

      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })

    }
  }

  static async createPost (req, res) {
    const { title, content } = req.body
    try {
      const newTask = await Post.create({ title, content, author: req.user.id });
      const savedTask = await newTask.save();
      res.json(savedTask)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async deletePost (req, res) {
    const { id } = req.params
    try {
      const post = await Post.findByIdAndDelete(id)
      if (!post) return res.status(404).json({ message: 'Post not found' })

      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updatePost (req, res) {
    const { id } = req.params
    try {
      const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
      if (!post) return res.status(404).json({ message: 'Post not found' })

      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}