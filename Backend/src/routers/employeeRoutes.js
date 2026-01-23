import express from 'express';
import { getEmployee,createEmployee,updateEmployee,deleteEmployee} from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
export default router;