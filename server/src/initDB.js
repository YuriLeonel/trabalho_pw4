const database = require("./db.js");
const axios = require('axios');

const Account = require("./model/account.js");
const Agents = require("./model/agents.js");
const AccountAgent = require("./model/account_agent.js");

(async ()=> {
    await database.sync();
    /* This creates a new user account, each has an auto incremented ID */
    await Account.create({
        login: "yuri@teste.com",
        password: "yuriPassword",
        nickname: "MSP Mamaco Louco",
        tag: "#tbtr",
        region: "São Paulo",
    })
    /* await Account.drop(); */  

    /* This call the valorant API to recieve all the agents data */
    const allAgents = await axios.get('https://valorant-api.com/v1/agents', {params: {isPlayableCharacter: true}}).then(({data}) => {
        return data.data
    }).catch((err) => {
        console.log(err)
    })
    /* await Agents.drop(); */

    /* This populate the agents table with each agent */
    allAgents.map(({displayName, description, displayIcon, role}) => {
        Agents.create({
            name: displayName,
            description,
            displayIcon,
            role: role.displayName
        })
    }) 

    /* This create the table that join the account table with the agent table */
    await AccountAgent.create({
            id_account: "1",
            id_agent: "1",
            main: true
        }) 

    /* await AccountAgent.drop();  */


})();