const fs = require("fs");
const files = require("../helpers/files");
const upload = require("../config/upload")
const posts = [
  {
    id: 1,
    nome: "Roberto",
    email: "robertinho123@email.com",
    titulo: "Titulo da postagem",
    mensagem: "Viajar é preciso",
    avatar: "airplane.jpg",
  },]