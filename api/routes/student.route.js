import express from 'express';
import {test,add, getStudents,updateStudent, deleteStudent, getStudent} from '../controllers/student.controller.js'


const router=express.Router();

router.get('/test',test);
router.post('/add',add);
router.get('/getstudents',getStudents);
router.put('/update/:studentId',updateStudent);
router.delete('/delete/:studentId',deleteStudent);
router.get('/getstudent/:studentId',getStudent);

export default router;