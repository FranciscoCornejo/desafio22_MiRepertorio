import express from "express";
const router = express();

import {
  getDate,
  mostrarCanciones,
  agregarCanciones,
  actualizarCanciones,
  borrarCanciones,
} from "../controllers/ControllerProject.js";
import path from "path";
const __dirname = import.meta.dirname;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//prueba de conexión a la base de datos
router.get("/fecha", async (req, res) => {
  const FechaHora = await getDate();
  res.json({ fecha: FechaHora });
});

//SELECT
router.get("/canciones", async (req, res) => {
  const canciones = await mostrarCanciones();
  res.json(canciones);
});

//INSERT INTO
router.post("/cancion", async (req, res) => {
  const { titulo, artista, tono } = req.body;
  const datos = [titulo, artista, tono];
  console.log(datos, "datos");
  const cancion = await agregarCanciones(datos);
  res.send("cancion agregada");
});

//UPDATE
router.put("/cancion/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, artista, tono } = req.body;
  const datos = [titulo, artista, tono, id];
  const cancion = await actualizarCanciones(datos);
  res.send("cancion actualizada");
});

//DELETE
router.delete("/cancion", async (req, res) => {
  const { id } = req.query;
  const cancion = await borrarCanciones(id);
  res.send("cancion borrada");
});

router.get("*", (req, res) => res.send("ruta no encontrada"));

export default router;
