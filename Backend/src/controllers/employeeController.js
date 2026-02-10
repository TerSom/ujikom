import db from "../config/db.js";

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employees");

    res.status(200).json({
      message: "Employees retrieved successfully",
      employees: rows,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve employees",
      error: error.message,
    });
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, department_id, role, video_src } = req.body;

    if (!name || !department_id || !role || !video_src) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await db.query(
      "INSERT INTO employees (name, department_id, role, video_src) VALUES (?, ?, ?, ?)",
      [name, department_id, role, video_src],
    );

    res.status(201).json({
      message: "Employee created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, department_id, role, video_src } = req.body;

    if (!name || !department_id || !role || !video_src) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const [result] = await db.query(
      "UPDATE employees SET name = ?, department_id = ?, role = ?, video_src = ? WHERE id = ?",
      [name, department_id, role, video_src, id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update employee",
      error: error.message,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("DELETE FROM employees WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete employee",
      error: error.message,
    });
  }
};
