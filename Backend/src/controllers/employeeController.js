import db from "../config/db.js"

export const getEmployee = async (req, res) => {
    const [rows] = await db.query('SELECT * FROM employees');
    res.status(200).json({
        message: "Employees retrieved successfully",
        employees: rows,
    });
}

export const createEmployee = async (req, res) => {
    const { name, department_id , role , video_src} = req.body
    const [rows] = await db.query('INSERT INTO employees (name, department_id, role ,video_src ) VALUES (?, ?, ?, ?)', [name, department_id, role , video_src]);
    res.status(201).json({
        message: "Employee created successfully",
    })
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, department_id , role , video_src} = req.body;

    const [rows] = await db.query('UPDATE employees SET name = ?, department_id = ? , video_src =  ?, role = ? WHERE id = ?', [name, department_id,  video_src ,role, id,]);
    res.status(200).json({
        message: "Employee updated successfully",
    })
}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    const [rows] = await db.query('DELETE FROM employees WHERE id = ?', [id]);
    res.status(200).json({
        message: "Employee deleted successfully",
    })
}