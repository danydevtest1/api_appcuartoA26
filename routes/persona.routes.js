const express=require("express");
const PersonaController=require("../controllers/persona.controller");

//Definimos las rutas
const api=express.Router();

//estas son las peticiones
api.post("/persona/create",PersonaController.createPersona);

module.exports=api;