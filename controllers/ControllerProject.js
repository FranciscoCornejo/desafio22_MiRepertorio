import pool from "../config/db.js";

//probamos la coneccion
const getDate = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log(result.rows[0].now);
    return result.rows;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    throw error;
  }
};
getDate();

//SELECT
const mostrarCanciones = async () => {
  try {
    const consulta = {
      text: "SELECT * FROM canciones",
    };
    const respuesta = await pool.query(consulta);
    return respuesta.rows;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    throw error;
  }
};

//INSER INTO
const agregarCanciones = async (datos) => {
  try {
    const consulta = {
      text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
      values: datos,
    };
    const respuesta = await pool.query(consulta);
    return respuesta.rows;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    throw error;
  }
};

//UPDATE
const actualizarCanciones = async (datos) => {
  try {
    const consulta = {
      text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
      values: datos,
    };
    const respuesta = await pool.query(consulta);
    return respuesta.rows;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    throw error;
  }
};

//DELETE
const borrarCanciones = async (id) => {
  try {
    const consulta = {
      text: "DELETE FROM canciones WHERE id = $1",
      values: [id],
    };
    const respuesta = await pool.query(consulta);
    return respuesta.rows;
  } catch (error) {
    console.error("Error al conectarse a la base de datos:", error);
    throw error;
  }
};

export {
  getDate,
  mostrarCanciones,
  agregarCanciones,
  actualizarCanciones,
  borrarCanciones,
};
