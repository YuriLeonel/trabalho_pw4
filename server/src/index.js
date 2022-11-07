const express = require("express");
const app = express();

const port = 8888;

const i18n = require('i18n')

i18n.configure({
  locales: ['pt-BR'],
  defaultLocale: "pt-BR",
        directory: "./locales",
        extension: ".json",
        cookie: "lang"
})


app.use(express.json())
app.use("/account", require("./account/indexAccount.js"));
app.use("/agent", require("./agents/indexAgent.js"));
app.use("/account_agent", require("./accountAgents/indexAccountAgents.js"));

// app.get("/checkAccount" , (req,res) => {
//   console.log("Entrou no checkAccount id");
// })

app.listen(port, function () {
  console.log(`Servidor iniciado na porta ${port}`);
})

