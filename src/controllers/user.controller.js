import User from "../models/database/User.js";
import Profile from '../models/database/Profile.js';

export class UserController {
  static async getAllPostsByUser (req, res) {
    const { userId } = req.params

    try {
      const user = await User.findById(userId).populate('posts').lean();

      if (!user) return res.status(404).json({ message: 'User not found' });
      // Access the user's posts through the 'posts' virtual field
      const posts = user.posts;
      if (!posts) return res.status(404).json({ message: 'Posts not found' });

      res.json(posts);
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserSettings (req, res) {
    const { userId } = req.params
    try {
      const profile = await Profile.findOne({ user: userId }).populate('user')
      res.json(profile)
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message })
    }
  }

  static async changeUserSettings (req, res) {
    const { bio, github, location, website_url, skills, currently_learning, available_for, username, email, profile_image } = req.body.settings

    try {
      // Find the user by ID
      const user = await User.findById(req.body.userId);
      console.log(user);

      if (!user) return res.status(404).json({ message: 'User not found' });


      // Find the associated profile by user ID
      const profile = await Profile.findOne({ user: user.id });
      console.log(profile)

      if (!profile) return res.status(404).json({ message: 'Profile not found' })

      // Update the profile settings
      profile.bio = bio
      profile.github = github
      profile.location = location
      profile.website_url = website_url
      profile.skills = skills
      profile.currently_learning = currently_learning
      profile.available_for = available_for
      profile.username = username
      // ... (update other profile fields)

      // Save the updated profile
      await profile.save();

      // Update user-related fields (e.g., username and email) if needed
      user.username = username
      user.email = email

      // Save the updated user
      await user.save();

      res.sendStatus(200);
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating profile settings' });
    }


  }

  static async setTheme (req, res) {
    const { theme } = req.body

    try {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const profile = await Profile.findOne({ user: user.id });
      if (!profile) return res.status(404).json({ message: 'Profile not found' });

      profile.theme = theme
      await profile.save();

      res.json(profile.theme);
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getTheme (req, res) {
    const { userId } = req.params
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      const profile = await Profile.findOne({ user: user.id });
      if (!profile) return res.status(404).json({ message: 'Profile not found' });

      res.json(profile.theme);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


}