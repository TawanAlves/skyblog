const express = require("express");
const server = express();
const port = 4000
server.use(express.json())
// Todo: Mudar porta


const posts = [
   {
     id: 1,
     nome: "Roberto",
     email: "robertinho123@email.com",
     titulo: "Titulo da postagem",
     mensagem: "Viajar é preciso",
     avatar: "airplane.jpg",
   },
   {
      id: 2,
      nome: "Jose",
      email: "Jose123@email.com",
      titulo: "Titulo da postagem2 ",
      mensagem: "Viajar é preciso2",
      avatar: "airplane.jpg",
    },]

// retornar um curso
server.get('/posts/:index', (req, res)=>{
   const {index} = req.params

   return res.json(posts[index])
});

//retornar todos os posts
server.get('/posts', (req, res)=>{
   return res.json(posts)
});

//criar novo curso
server.post('/posts', (req, res) =>{
   const { name } = req.body;
   posts.push(name);

   return res.json(posts);
});

//atualizar curso
server.put('/posts/:index', (req, res)=>{
   const {index} = req.params
   const {name} = req.body
   posts[index] = name

   return res.json(posts)
});

//deletar curso
server.delete('/posts/:index', (req, res) =>{
   const {index} = req.params
   posts.splice(index, 1)
   return res.json({message: "O curso foi deletado"})

});




server.listen(port, () => {
   console.log("Estamos rodando na porta " + port);
 });






