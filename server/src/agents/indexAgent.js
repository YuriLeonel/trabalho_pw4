const router = require("express").Router();

const database = require("../db.js");
const Agents = require("../model/agents.js");


router.get("/checkAgent", (req,res) => {
    const  id = req.query.id;

    if(id != null){
        (async ()=> {
            await database.sync();
            const select = await Agents.findByPk(id);
            console.log(select);
    
            if(select != null){
                res.status(200).json(select);
            }else{
                res.status(200).send("ID not found.");
            }
        })();
    }else{
        res.status(200).send("ID not received.");
    }

    
    // Caso ache retorna um json com os objetos 

    // Caso não ache retorna erro
})

router.post("/newAgent", (req, res) => {

    // Valida se o e-mail já possui conta

    // Valida se o nome de usuário com a Hash já está sendo utilizado

    // Se passou pelas validações retorna o ok

    // Se parou nas validações responde com erro.
    

    if(req.body != null){

        (async ()=> {
            await database.sync();

            Agents.create({
                name: req.body.name,
                description: req.body.description,
                displayIcon: req.body.displayIcon,
                role: req.body.displayName
            })

        })();
    }else{
        res.status(200).send("JSON missing.");
    }

})

module.exports = router;