import express from "express";
import departmentsRouter from "./routers/departmentRoutes.js";
import employeeRouter from "./routers/employeeRoutes.js";
import router from "./routers/indexRouter.js";
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}))

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/departments", departmentsRouter);
app.use("/api/employees", employeeRouter);
app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
