const router = require("express").Router();

const database = require("../db.js");
const Account = require("../model/account.js");

// router.get("/checkAccount" , (req, res, next) => {
//     res.send("Checkaccount sem parametro")
// })

// Busca uma conta baseado no id passado
router.get("/checkAccount", (req,res) => {


    // Adicionar verificação de id
    const id = req.query.id;

    if(id != null){
        
        (async ()=> {
            await database.sync();
            const select = await Account.findByPk(id);

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

router.post("/newAccount", (req, res) => {

    // Valida se o e-mail já possui conta

    if(req.body != null){

        (async ()=> {
            await database.sync();

            await Account.create({
                login: req.body.login,
                password: req.body.password,
                nickname: req.body.nickname,
                tag: req.body.tag,
                region: req.body.region,
            })

        })();
    }else{
        res.status(200).send("JSON missing.");
    }



})

router.delete("/deleteAccount", (req, res) => {
    const id = req.query.id;
    if(id != null){
        (async ()=> {
            await database.sync();

            await Account.destroy({
                where : {'id_account' : id}
            })


            res.status(200).send("ID not received.");


        })();

    }else{
        res.status(200).send("ID not received.");
    }
})

router.put("/updateAccount", (req,res) => {
    if(req.body != null){

        (async ()=> {
            await database.sync();

            await Account.update(
                {login: req.body.login,
                    password: req.body.password,
                    nickname: req.body.nickname,
                    tag: req.body.tag,
                    region: req.body.region},
                { where: { id_account: req.query.id} }
              )

              res.status(200).send("Update Success.");

        })();
    }else{
        res.status(200).send("JSON missing.");
    }
})

// Validar login
router.get("/validateAccount", (req,res) => {

const login = req.query.login;
const password = req.query.password;

if(login != null && password != null){
        
    (async ()=> {
        await database.sync();
        const select = await Account.findOne({ where: { login: login , password: password}});

        if(select != null){
            res.status(200).json(select);
        }else{
            res.status(200).send("User not found.");
        }
        

        
    })();
}else{
    res.status(200).send("Params not received.");
}

})


module.exports = router;