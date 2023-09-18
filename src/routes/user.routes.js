import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js'
import { UserController } from '../controllers/user.controller.js';

const router = Router()



router.get('/customization', (req, res) => {
  res.json({ message: 'Customization page' })
})

router.get('/:userId', authRequired, UserController.getAllPostsByUser);

export default router