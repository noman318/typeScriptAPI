import express from 'express'
import { Router } from 'express'
import { getPostById,getPosts } from '../controllers/postCon'
const router = express.Router()
router.get('/posts',getPosts)
router.get('/posts/:id',getPostById)
export default router