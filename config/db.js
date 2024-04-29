//3. se configura la base de datos usando dotenv
import pkg from "pg";
const { Pool } = pkg;

//nueva forma de importar dotenv
//process.loadEnvFile(); //se comenta para desplegar en render y se utiliza la forma anterior a la version 21 de node

import dotenv from "dotenv";
dotenv.config();

//desestructuramos las variables de entorno
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;

// //creamos el objeto de configuracion
// const config = {
//   user: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   database: DB_DATABASE,
//   allowExitOnIdle: true, //con esta instruccion luego de realizar la consulta cancelamos la coneccion
// };

const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGDIALECT } = process.env;

//creamos el objeto de configuracion
// const config = {
//   user: PGUSER,
//   password: PGPASSWORD,
//   host: PGHOST,
//   database: PGDATABASE,
//   dialect: PGDIALECT,
//   ssl: {
//     require: true,
//     rejectUnauthorized: false,
//   },
//   //allowExitOnIdle: true, //con esta instruccion luego de realizar la consulta cancelamos la coneccion
// };

// Creamos el objeto de configuración con SSL
const config = {
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  database: PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
};

//creamos el pool
const pool = new Pool(config);

export default pool;
