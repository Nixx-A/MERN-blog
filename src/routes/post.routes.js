import { Router } from 'express'
import { PostController } from "../controllers/post.controller.js";

const router = Router()

router.get('/', PostController.getPosts)

router.get('/:id', PostController.getPost)

router.post('/new', PostController.createPost)

router.delete('/delete/:id', PostController.deletePost)

router.put('/update/:id', PostController.updatePost)



export default router