import e from "express";
const router = e.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "online",
  });
});

export default router;
