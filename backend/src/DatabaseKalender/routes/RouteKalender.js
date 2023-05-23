import express from "express";
import {
  getKalender,
  getKalenderById,
  saveKalender,
  deleteKalender,
} from "../controllers/ControllerKalender.js";

const router = express.Router();

router.get("/kalender", getKalender);
router.get("/kalender/:id", getKalenderById);
router.post("/kalender", saveKalender);
router.delete("/kalender/:id", deleteKalender);

export default router;
