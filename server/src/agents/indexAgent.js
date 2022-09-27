const router = require("express").Router();

router.get("/checkAgent/:id", (req,res) => {
    // Busca na base dados uma conta com o id recebido

    // Caso ache retorna um json com os objetos 

    // Caso não ache retorna erro
})

router.post("/newAgent", (req, res) => {

    // Valida se o e-mail já possui conta

    // Valida se o nome de usuário com a Hash já está sendo utilizado

    // Se passou pelas validações retorna o ok

    // Se parou nas validações responde com erro.
    
    console.log(req.body);
    var json_received = req.body;
    res.json(req.body);

})

module.exports = router;