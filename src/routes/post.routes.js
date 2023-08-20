import { Router } from 'express'
import { PostController } from "../controllers/post.controller.js";
import { authRequired } from '../middlewares/validateToken.js';

const router = Router()

router.get('/', authRequired, PostController.getPosts)

router.get('/:id', authRequired, PostController.getPost)

router.post('/new', authRequired, PostController.createPost)

router.delete('/:id', authRequired, PostController.deletePost)

router.put('/:id', authRequired, PostController.updatePost)



export default router