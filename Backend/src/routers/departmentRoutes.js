import express from "express";
import { getAllDepartments,createDepartment,updateDepartment,deleteDepartment,getDepartmentsWithEmployees} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", getAllDepartments);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);
router.get("/with-employees", getDepartmentsWithEmployees);
export default router;