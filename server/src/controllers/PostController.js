const fs = require("fs");
const files = require("../helpers/files");
const upload = require("../config/upload");
const { v1: uuidv1 } = require("uuid");

const posts = [
  {
    id: "661728b0-92f5-11ed-ae5e-ef9f7d26733a",
    date: "2023-07-28T02:54:58.188Z",
    nome: "Roberto",
    email: "robertinho123@email.com",
    titulo: "Titulo da postagem",
    mensagem:
      "Viajar é preciso.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
    avatar: "jat.jpg",
  },
  {
    id: "4cf57170-92f5-11ed-ae5e-ef9f7d26733a",
    date: "2023-05-18T02:54:58.188Z",
    nome: "Jose",
    email: "Jose123@email.com",
    titulo: "Titulo da postagem 2 ",
    mensagem:
      "Rapido é melhor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
    avatar: "airplane.jpg",
  },
  {
    id: "a9d3a960-936e-11ed-9ec4-89c66bb13c4c",
    date: "2023-11-15T02:54:58.188Z",
    nome: "Helder",
    email: "helder23@email.com",
    titulo: "Titulo da postagem do Helder ",
    mensagem:
      "Rapido é melhor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
    avatar: "airplane.jpg",
  },
];

const postController = {
  index: (req, res) => {
    const postsToSend = posts.map((postToSend) => {
      return {
        ...postToSend,
        avatar: files.base64Encode(upload.path + postToSend.avatar),
      };
    });
    return res.json(postsToSend);
  },

  show: (req, res) => {
    const { id } = req.params;
    const postResult = posts.find((post) => post.id === id);
    if (!postResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Post não encontrado",
      });
    }
    const post = {
      ...postResult,
      avatar: files.base64Encode(upload.path + postResult.avatar),
    };
    // console.log(post);
    return res.json(post);
  },

  store: (req, res) => {
    const { nome, date, email, titulo, mensagem, avatar } = req.body;
    let filename = "airplane22.jpg";
    if (req.file) {
      console.log(filename);
      filename = req.file.filename;
    } else {
      console.log("no-image");
    }

    const newPost = {
      id: uuidv1(),
      nome,
      email,
      titulo,
      mensagem,
      date,
      avatar: filename,
    };
    posts.push(newPost);
    return res.json(posts);
  },

  update: (req, res) => {
    const { id } = req.params;
    const { nome, dia, mes, email, titulo, mensagem } = req.body;
    const postResult = posts.find((post) => post.id === id);

    let filename;
    if (req.file) {
      filename = req.file.filename;
    }
    if (!postResult) {
      return res.render("error", {
        title: "Ops!",
        message: "Nenhuma postagem encontrada",
      });
    }

    const updatePost = postResult;
    if (nome) updatePost.nome = nome;
    if (email) updatePost.email = email;
    if (titulo) updatePost.titulo = titulo;
    if (mensagem) updatePost.mensagem = mensagem;
    if (filename) {
      let avatarTmp = updatePost.avatar;
      fs.unlinkSync(upload.path + avatarTmp);
      updatePost.avatar = filename;
    }
    return res.json(posts);
  },

  delete: (req, res) => {
    const { id } = req.params;
    delPost = posts.findIndex((o) => o.id == id);
    posts.splice(delPost, 1);
    return res.json({ message: "post deletado" });
  },
};
//*Destroy e create n adicionados

// server.delete('/posts/:index', (req, res) =>{
//    const {index} = req.params
//    posts.splice(index, 1)
//    return res.json({message: "O curso foi deletado"})

module.exports = postController;
