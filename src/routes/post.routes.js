import { Router } from 'express'
import { PostController } from "../controllers/post.controller.js";
import { authRequired } from '../middlewares/validateToken.js';
import { CommentController } from "../controllers/comment.controller.js";
import { TagController } from "../controllers/tag.controller.js";
import { createPostSchema } from '../schemas/postSchema.js'
import { validateSchema } from '../middlewares/validator.js';

const router = Router()

router.get('/', PostController.getPosts)
router.get('/latest', PostController.getLatestPosts)
router.get('/top', PostController.getTopPosts)

router.get('/tags', TagController.getTags);
router.get('/:id', PostController.getPost)
router.post('/', validateSchema(createPostSchema), authRequired, PostController.createPost)
router.delete('/:id', authRequired, PostController.deletePost)
router.put('/:id', authRequired, PostController.updatePost)

router.get('/:postId/comments', CommentController.getComments);
router.post('/:postId/comments', authRequired, CommentController.createComment);
router.delete('/comments/:commentId', authRequired, CommentController.deleteComment);


router.get('/tag/:tagId', TagController.getPostsByTag);
router.post('/tags', authRequired, TagController.createTag);
router.delete('/:postId/tags/:tagId', authRequired, TagController.deleteTag);

router.post('/:postId/like', authRequired, PostController.addLike);


export default router