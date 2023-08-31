import { Router } from 'express'
import { PostController } from "../controllers/post.controller.js";
import { authRequired } from '../middlewares/validateToken.js';
import { CommentController } from "../controllers/comment.controller.js";
import { TagController } from "../controllers/tag.controller.js";

const router = Router()

router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPost)
router.post('/', authRequired, PostController.createPost)
router.delete('/:id', authRequired, PostController.deletePost)
router.put('/:id', authRequired, PostController.updatePost)

router.get('/:postId/comments', authRequired, CommentController.getComments);
router.post('/:postId/comments', authRequired, CommentController.createComment);
router.delete('/:postId/comments/:commentId', authRequired, CommentController.deleteComment);

router.get('/:postId/tags', authRequired, TagController.getTags);
router.post('/:postId/tags', authRequired, TagController.createTag);
router.delete('/:postId/tags/:tagId', authRequired, TagController.deleteTag);


export default router