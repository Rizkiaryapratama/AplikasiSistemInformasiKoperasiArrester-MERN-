import express from "express";
import {
  getKas,
  getKasById,
  saveKas,
  updateKas,
  deleteKas,
} from "../controllers/ControllerKas.js";

const router = express.Router();

router.get("/kas", getKas);
router.get("/kas/:id", getKasById);
router.post("/kas", saveKas);
router.patch("/kas/:id", updateKas);
router.delete("/kas/:id", deleteKas);

export default router;
