import express from 'express'
import UserController from '../controllers/users.js';
const router = express.Router();

router.get('/getUser', UserController.getUser);





export default router;