const express = require("express");
const server = express();
const port = 4000

// Converter corpo da requisição (body) em objeto literal
server.use(express.json())
// Todo: Mudar porta

// Importa pacote method-override
// Serve para alterar método da requisição
// Ex: Post vira put, get vira delete, get vira put...
const methodOverride = require("method-override");

const postRoute = require("./src/Routes/postRoute")

// Configura o methodOverride no express
server.use(methodOverride("_method"));
// Converter corpo da requisição (body) em objeto literal
server.use(express.json());
// Converte requisição para formato que o json aceita
server.use(express.urlencoded({ extended: false }));
// Middleware global
server.use((req, res, next) => {
  console.log("Entrou no middleware global");
  // console.log(req.url);
  // if (req.url === "/") {
  //   next();
  // } else {
  //   res.render("error", {
  //     title: "!Ops",
  //     message: "Aqui você não entra",
  //   });
  // }
  next();
});




// localhost:3000/user/
server.use("/post", postRoute);

// Página não encontrada - 404 not found
app.get("*", (req, res, next) => {
   res.status(404).render("error", {
     title: "Ops!",
     message: "Página não encontrada 2",
   });
 });







// const posts = [
//    {
//      id: 1,
//      nome: "Roberto",
//      email: "robertinho123@email.com",
//      titulo: "Titulo da postagem",
//      mensagem: "Viajar é preciso",
//      avatar: "airplane.jpg",
//    },
//    {
//       id: 2,
//       nome: "Jose",
//       email: "Jose123@email.com",
//       titulo: "Titulo da postagem2 ",
//       mensagem: "Viajar é preciso2",
//       avatar: "airplane.jpg",
//     },]

// // retornar um curso
// server.get('/posts/:index', (req, res)=>{
//    const {index} = req.params

//    return res.json(posts[index])
// });

// //retornar todos os posts
// server.get('/posts', (req, res)=>{
//    return res.json(posts)
// });

// //criar novo curso
// server.post('/posts', (req, res) =>{
//    const { nome, email, titulo, mensagem , avatar } = req.body;
//    const newPost = {
//       id: posts.length + 1,
//       nome, 
//       email, 
//       titulo, 
//       mensagem , 
//       avatar,
//     };
//    posts.push(newPost);

//    return res.json(posts);
// });

// //atualizar Postagem
// server.put('/posts/:index', (req, res)=>{
//    const {index} = req.params
//    const { nome, email, titulo, mensagem , avatar } = req.body;
//    const postResult = users.find((post) => post.id === parseInt(id));

//    const updatePost = postResult;
//     if (nome) updatePost.nome = nome;
//     if (email) updatePost.email = email;
//     if (titulo) updatePost.titulo = titulo;
//     if (mensagem) updatePost.mensagem = mensagem;
//     if (avatar) updatePost.avatar = avatar;

//    posts[index] = (nome, email, titulo, mensagem , avatar)

//    return res.json(posts)
// });

// //deletar curso
// server.delete('/posts/:index', (req, res) =>{
//    const {index} = req.params
//    posts.splice(index, 1)
//    return res.json({message: "O curso foi deletado"})

// });




server.listen(port, () => {
   console.log("Estamos rodando na porta " + port);
 });





