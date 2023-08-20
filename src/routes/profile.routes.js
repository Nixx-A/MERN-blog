import { Router } from 'express';

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Home page' })
})

router.get('/customization', (req, res) => {
  res.json({ message: 'Customization page' })
})

export default router