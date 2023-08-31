import Tag from "../models/database/Tag.js";

export class TagModel {
  static async getTags (req, res) {
    const { postId } = req.params;

    try {
      const tags = await Tag.find({ post: postId }).lean();
      res.json(tags);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createTag (req, res) {
    const { name } = req.body
    try {
      const newTag = await Tag.create({ name, post: req.params.postId })
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