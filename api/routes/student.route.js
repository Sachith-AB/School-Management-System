import express from 'express';
import {test} from '../controllers/student.controller.js'

const router=express.Router();

router.post('/add',test);

export default router;