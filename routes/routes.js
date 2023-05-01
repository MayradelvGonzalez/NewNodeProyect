import { Router } from 'express';

const router = Router()

router.get('/', (req,res) => res.render('main', { title:'Ejemplo'}))
router.get('/about', (res, req) => res.render('about', { title: 'About'}))

export default router;