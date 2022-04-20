import { postController } from './../controller/PostController';
import express  from 'express';

export const postRouter = express.Router()
const PostController = new postController()

postRouter.post('/create', PostController.createPost)
postRouter.get('/:id', PostController.getPostById)