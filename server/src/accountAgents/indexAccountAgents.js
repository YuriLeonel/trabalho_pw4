const router = require("express").Router();

const database = require("../db.js");
const AccountAgent = require("../model/account_agent.js");

router.get("/checkAccountAgent", (req,res) => {


const id = req.query.id;

if(id != null){
        
    (async ()=> {
        await database.sync();
        const select = await AccountAgent.findByPk(id);

        if(select != null){
            res.status(200).json(select);
        }else{
            res.status(200).send("ID not found.");
        }
        

        
    })();
}else{
    res.status(200).send("ID not received.");
}
})

router.post("/newAccountAgent", (req, res) => {

    // Valida se o e-mail já possui conta

    if(req.body != null){

        (async ()=> {
            await database.sync();

            await AccountAgent.create({
                id_account: req.body.id_account,
                id_agent: req.body.id_agent,
                main: req.body.main
            })

        })();
    }else{
        res.status(200).send("JSON missing.");
    }

  

})


router.delete("/deleteAccountAgent", (req,res) => {
    const id = req.query.id;
    if(id != null){
        (async ()=> {
            await database.sync();

            await AccountAgent.destroy({
                where : {'id_account_agent' : id}
            })


            res.status(200).send("ID not received.");


        })();

    }else{
        res.status(200).send("ID not received.");
    }
})
module.exports = router;