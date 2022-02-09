import express from "express";
import * as filmesController from "../controllers/filmes.controller.js";

const router = express.Router();

router.get('/', filmesController.getAll);
router.get('/:id', filmesController.getById);
router.put('/update/:id', filmesController.updateFilme);
router.delete('/delete/:id', filmesController.deleteFilme);
router.post('/create', filmesController.createFilme);

export default router;