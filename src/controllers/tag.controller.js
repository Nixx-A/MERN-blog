import Post from "../models/database/Post.js";
import Tag from "../models/database/Tag.js";

export class TagController {
  static async getTags (req, res) {

    try {
      const tags = await Tag.find().lean();

      // Create an array to store the tags with post IDs
      const tagsWithPostIds = [];
  
      // Iterate through the tags
      for (const tag of tags) {
        // Find posts associated with the current tag
        const posts = await Post.find({ tags: tag._id }).lean();
  
        // Extract and store the post IDs
        const postIds = posts.map((post) => post._id);
  
        // Add a new property 'postIds' to the tag object
        const tagWithPostIds = { ...tag, postIds };
  
        // Add the tag with post IDs to the array
        tagsWithPostIds.push(tagWithPostIds);
      }
  
      // Respond with the tags including post IDs
      res.json(tagsWithPostIds);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPostsByTag (req, res) {
    const { tagId } = req.params;
    try {
      const tag = await Tag.findById(tagId);
      if (!tag) return res.status(404).json({ message: 'Tag not found' });

      const posts = await Post.find({ tags: tagId }).lean().populate('tags').populate('author')

      const postIds = posts.map((post) => post._id);
      

      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async createTag (req, res) {
    const { name } = req.body
    try {
      const newTag = await Tag.create({ name })
      const savedTag = await newTag.save()

      res.json(savedTag)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteTag (req, res) {
    const { tagId } = req.params
    try {
      const tag = await Tag.findByIdAndDelete(tagId)
      if (!tag) return res.status(404).json({ message: 'Tag not found' })

      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


}