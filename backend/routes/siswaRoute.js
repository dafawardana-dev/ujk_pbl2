import express from "express";
import { getAllSiswa, getAllSiswaByID, createSiswa, updateSiswa, deleteSiswa } from "../controllers/siswaControllers.js";

const router = express.Router();

router.get("/siswa", getAllSiswa);
router.get("/siswa/:id", getAllSiswaByID);
router.post("/siswa", createSiswa);
router.put("/siswa/:id", updateSiswa);
router.delete("/siswa/:id", deleteSiswa);

export default router;