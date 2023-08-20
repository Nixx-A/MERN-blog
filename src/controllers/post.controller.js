import Post from "../models/database/Post.js";

export class PostController {
  static async getPosts (req, res) {
    res.json('get posts')
  }

  static async getPost (req, res) {
    const { id } = req.params

    res.json(id)
  }

  static async createPost (req, res) {
    console.log(req.body);
    const post = new Post(req.body);
    await post.save();
    res.send(post);
  }

  static async deletePost (req, res) {
    
  }

  static async updatePost (req, res) {

  }
}