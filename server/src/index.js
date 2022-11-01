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
app.use("/contas", require("./account/indexAccount"));

app.listen(port, function () {
  console.log(`Servidor iniciado na porta ${port}`);
})