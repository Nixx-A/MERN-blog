import User from "../models/database/User.js";
import Profile from '../models/database/Profile.js';

export class UserController {
  static async getAllPostsByUser (req, res) {
    const { userId } = req.params

    try {
      const user = await User.findById(userId).populate('posts');

      console.log(user);
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
    console.log(req.user.id);

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
      // ... (update other profile fields)

      // Save the updated profile
      await profile.save();

      // Update user-related fields (e.g., username and email) if needed
      //user.username = username
      //user.email = email

      // Save the updated user
      await user.save();

      res.json({ message: 'Profile settings updated successfully' });
    } catch (error) {
      // Handle any errors that may occur during the process
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating profile settings' });
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