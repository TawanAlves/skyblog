const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());

// Serve para alterar método da requisição
const methodOverride = require("method-override");

const postRoute = require("./src/routes/postRoute");

// Converter corpo da requisição (body) em objeto literal
server.use(express.json());

//Todo: ver se precisa usar esses
// Configura o methodOverride no express
server.use(methodOverride("_method"));
// Converte requisição para formato que o json aceita
server.use(express.urlencoded({ extended: false }));
// Middleware global
server.use((req, res, next) => {
  // console.log("Entrou no middleware global");
  next();
});

// localhost:3000/post/
server.use("/post", postRoute);

//Página não encontrada - 404 not found
server.get("*", (req, res, next) => {
  res.status(404).render("error", {
    title: "Ops!",
    message: "Página não encontrada 2",
  });
});

module.exports = server;
