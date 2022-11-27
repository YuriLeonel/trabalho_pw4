const router = require("express").Router();

const database = require("../db.js");
const Matchs = require("../model/matchs.js")



router.get("/getMatchs", (req,res) => {
    
    const id = req.query.id;

    if(id != null){
        (async ()=> {
            await database.sync();
            const select = await Matchs.findAll({where : {id_account_one : id}})

            if(select != null){
                res.status(200).json(select);
            }else{
                res.status(200).send("Matchs not found.")
            }
        })
    }else{
        res.status(200).send("Id not received.")
    }

})

router.put("/updateActiveFlag" , (req, res) => {
    if(req.body != null){

        (async ()=> {
            await database.sync();

            await Matchs.update(
                {active: req.body.active,},
                { where: { id_match: req.query.id} }
              )

              res.status(200).send("Flag updated.");

        })();
    }else{
        res.status(200).send("JSON missing.");
    }

    
}) 


router.post("/newMatch", (req, res) => {
    if(req.body != null){

        (async ()=> {
            await database.sync();

            await Matchs.create({
                id_account_one: req.body.id_account_one,
                id_account_two: req.body.id_account_two,
                active: req.body.active,               
            })

        })();
    }else{
        res.status(200).send("JSON missing.");
    }

})