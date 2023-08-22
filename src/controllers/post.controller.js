import Post from '../models/database/Post.js'
import Comment from '../models/database/Comment.js'
import Tag from '../models/database/Tag.js';

export class PostController {
  static async getPosts(req, res) {
    try {
      const posts = await Post.find()
      .populate('author')
      .populate('tags')
      .lean();
  
      if (!posts) return res.status(404).json({ message: 'Posts not found' });

  
      for (const post of posts) {
        const tags = await Tag.find({ post: post._id }).lean();
        const comments = await Comment.find({ post: post._id }).lean();
        post.comments = comments;
        post.tags = tags
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPost(req, res) {
    const { id } = req.params
    try {
      const post = await Post.findById(id)
        .populate('comments')
        .populate('author')
        .lean()

      if (!post) return res.status(404).json({ message: 'Post not found' })

      const tags = await Tag.find({ post: post._id }).lean()
      post.tags = tags

      const comments = await Comment.find({ post: post._id }).lean()
      post.comments = comments

      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async createPost(req, res) {
    const { title, content } = req.body
    try {
      const newTask = await Post.create({ title, content, author: req.user.id })
      const savedTask = await newTask.save()
      res.json(savedTask)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async deletePost(req, res) {
    const { id } = req.params
    try {
      const post = await Post.findByIdAndDelete(id)
      if (!post) return res.status(404).json({ message: 'Post not found' })

      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async updatePost(req, res) {
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
