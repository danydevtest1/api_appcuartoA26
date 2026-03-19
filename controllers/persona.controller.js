
class PersonaController{
    static createPersona=async(req,res)=>{
res.status(200).json({message:"Hola soy el ednpoint de crear persona"})
    }
}

module.exports=PersonaController;