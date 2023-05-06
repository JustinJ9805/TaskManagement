import express from 'express'
import UpdatesController from '../controllers/updates.js';
const router = express.Router();

router.get('/getUpdateStatus', UpdatesController.getUpdateStatus);




export default router;