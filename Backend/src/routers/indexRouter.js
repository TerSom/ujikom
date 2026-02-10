import e from "express";
const router = e.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Page Utama",
  });
});

router.get("/employee", (req, res) => {
  res.status(200).json({
    message: "Page Employee",
  });
});

router.get("/departments", (req, res) => {
  res.status(200).json({
    message: "Page Departments",
  });
});

export default router;
