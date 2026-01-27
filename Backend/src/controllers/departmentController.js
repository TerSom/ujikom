import db from "../config/db.js";

export const getAllDepartments = async (req, res) => {
    const [rows] = await db.query(`SELECT * FROM departments`);
    res.status(200).json({
        message: "Departments retrieved successfully",
        departements: rows,
    });
}

export const createDepartment = async (req, res) => {
    const { name, description} = req.body
    const [rows] = await db.query('INSERT INTO departments (name, description) VALUES (?, ?)', [name, description]);
    res.status(201).json({
        message: "Department created successfully",
    })
}

export const updateDepartment = async (req, res) => {
    const { id } = req.params;
    const { name, description} = req.body;

    const [rows] = await db.query('UPDATE departments SET name = ?, description = ? WHERE id = ?', [name, description, id]);
    res.status(200).json({
        message: "Department updated successfully",
    })
}

export const deleteDepartment = async (req, res) => {
    const { id } = req.params;
    const [rows] = await db.query('DELETE FROM departments WHERE id = ?', [id]);
    res.status(200).json({
        message: "Department deleted successfully",
    })
}

export const getDepartmentsWithEmployees = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT
        d.id AS department_id,
        d.name AS department_name,
        d.description,
        e.id AS employee_id,
        e.name AS employee_name,
        e.role,
        e.video_src
      FROM departments d
      LEFT JOIN employees e
        ON d.id = e.department_id
    `);

    const departmentsMap = {};

    for (const row of rows) {
      if (!departmentsMap[row.department_id]) {
        departmentsMap[row.department_id] = {
          id: row.department_id,
          name: row.department_name,
          description: row.description,
          employees: [],
        };
      }

      if (row.employee_id) {
        departmentsMap[row.department_id].employees.push({
          id: row.employee_id,
          name: row.employee_name,
          role: row.role,
          video_src : row.video_src
        });
      }
    }

    res.status(200).json(Object.values(departmentsMap));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
