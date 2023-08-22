import { Router } from 'express'
import { PostController } from "../controllers/post.controller.js";
import { authRequired } from '../middlewares/validateToken.js';
import { CommentModel } from "../controllers/comment.controller.js";
import { TagModel } from "../controllers/tag.controller.js";

const router = Router()

router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPost)
router.post('/', authRequired, PostController.createPost)
router.delete('/:id', authRequired, PostController.deletePost)
router.put('/:id', authRequired, PostController.updatePost)

router.post('/:postId/comment', authRequired, CommentModel.createComment);
router.get('/:postId/comment', authRequired, CommentModel.getComments);
router.delete('/:postId/comment/:commentId', authRequired, CommentModel.deleteComment);

router.get('/:postId/tags', authRequired, TagModel.getTags);
router.post('/:postId/tags', authRequired, TagModel.createTag);
router.delete('/:postId/tags/:tagId', authRequired, TagModel.deleteTag);


export default router