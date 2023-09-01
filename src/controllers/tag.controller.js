import Post from "../models/database/Post.js";
import Tag from "../models/database/Tag.js";

export class TagController {
  static async getTags (req, res) {

    try {
      const tags = await Tag.find().lean();
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getPostsByTag (req, res) {
    const { tagId } = req.params;
    try {
      const tag = await Tag.findById(tagId);
      if (!tag) return res.status(404).json({ message: 'Tag not found' });

      const postIds = tag.post

      // Find the posts by their ObjectIds
      const posts = await Post.find({ tags: tagId }).lean();

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