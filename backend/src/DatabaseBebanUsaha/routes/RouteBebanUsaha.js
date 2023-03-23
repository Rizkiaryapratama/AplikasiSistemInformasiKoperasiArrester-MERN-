import express from "express";
import {
  getBebanUsaha,
  getBebanUsahaById,
  saveBebanUsaha,
  updateBebanUsaha,
  deleteBebanUsaha,
} from "../controllers/ControllerBebanUsaha.js";

const router = express.Router();

router.get("/bebanusaha", getBebanUsaha);
router.get("/bebanusaha/:id", getBebanUsahaById);
router.post("/bebanusaha", saveBebanUsaha);
router.patch("/bebanusaha/:id", updateBebanUsaha);
router.delete("/bebanusaha/:id", deleteBebanUsaha);

export default router;
