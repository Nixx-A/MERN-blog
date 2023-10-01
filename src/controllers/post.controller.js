import Post from '../models/database/Post.js'
import Comment from '../models/database/Comment.js'
import Tag from '../models/database/Tag.js';

export class PostController {
  static async getPosts (req, res) {
    try {
      const posts = await Post.find()
        .populate('author')
        .lean();

      if (!posts) return res.status(404).json({ message: 'Posts not found' });

      for (const post of posts) {
        const comments = await Comment.find({ post: post._id }).lean();
        post.comments = comments;

        const tags = await Tag.find({ _id: { $in: post.tags } }).lean();
        post.tags = tags;
      }
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  static async getPost (req, res) {
    const { id } = req.params
    try {
      const post = await Post.findById(id)
        .populate('author')
        .lean()

      if (!post) return res.status(404).json({ message: 'Post not found' })

      const tags = await Tag.find({ _id: post.tags }).lean()
      post.tags = tags

      const comments = await Comment.find({ post: post._id }).lean().populate({ path: 'author', select: 'avatar username' })
      post.comments = comments

      res.json(post)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async createPost (req, res) {
    const { title, content, tags } = req.body;

    try {
      const newPost = await Post.create({
        title,
        content,
        author: req.user.id,
      });

      // Create or update tags for the post
      const tagObjects = [];
      for (const tagName of tags) {
        let tag = await Tag.findOne({ name: tagName });

        if (!tag) res.status(404).json({ message: 'Tag not found' });

        tagObjects.push(tag._id); // Push the tag's ObjectId to the array
      }

      newPost.tags = tagObjects; // Attach tag ObjectId(s) to the post
      console.log(newPost);
      const savedPost = await newPost.save();

      res.json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addLike (req, res) {
    const { postId } = req.params;
    const userId = req.user.id;

    try {
      // Check if the user has already liked the post
      const post = await Post.findById(postId);
      if (!post) return res.status(404).json({ message: 'Post not found' });

      const alreadyLiked = post.likes.includes(userId);

      if (alreadyLiked) {
        // User has already liked the post, so remove the like
        await Post.findByIdAndUpdate(postId, { $pull: { likes: userId } });
      } else {
        // User hasn't liked the post, so add the like
        await Post.findByIdAndUpdate(postId, { $addToSet: { likes: userId } });
      }

      // Fetch the updated post after adding/removing the like
      const updatedPost = await Post.findById(postId).populate('author').populate('tags');

      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
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
