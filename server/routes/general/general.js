import express from 'express'
import {getUser, getProject} from '../../controllers/general.js'

const router = express.Router();

router.get('',getUser);

router.get('',getProject)

export default router;