import User from "../models/database/User.js";

export class UserController {
  static async getAllPostsByUser (req, res) {
    const { userId } = req.params
    console.log(userId)

    try {
      const user = await User.findById(userId).populate('posts');

      console.log(user);
      if (!user) return res.status(404).json({ message: 'User not found' });
      // Access the user's posts through the 'posts' virtual field
      const posts = user.posts;
      if (!posts) return res.status(404).json({ message: 'Posts not found' });

      res.json(posts);
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error(error);
      throw error;
    }

  }
}