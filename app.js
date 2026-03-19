//Son las librerias para el servidor y validadcion
const express=require("express");
const cors=require("cors");

//Importamos rutas
const PersonaRouter=require("./routes/persona.routes");

//Variable que obtiene los valores del express
const app=express();


//configurar los http para validar a traves del cors
app.use(cors());

//Aqui van las rutas
app.use("/api/",PersonaRouter);

module.exports=app;

