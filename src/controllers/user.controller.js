import User from "../models/database/User.js";
import Profile from '../models/database/Profile.js';

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
      console.error(error);
      throw error;
    } catch (error) {
      console.log(error);
    }
  }

  static async setProfileSettings (req, res) {
    const { userId } = req.params
    const { bio, github, location, website, skills, learning, available_for, work, education, following, followers } = req.body

    try {
      console.log(bio, github, location, website, skills, learning, available_for, work, education, following, followers);

    } catch (error) {
      // Handle any errors that may occur during the process
      console.error(error);
      throw error;
    }
  }

  static async setProfileCustomization (req, res) {
    const { theme } = req.body

    try {
      console.log(theme)
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error(error);
      throw error;
    }
  }
}