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
   },
   {
      id: 2,
      nome: "Jose",
      email: "Jose123@email.com",
      titulo: "Titulo da postagem 2 ",
      mensagem: "Rapido é melhor",
      avatar: "jat.jpg",
    },
  ];

const postController = {

   index: (req, res) => {
      return res.json(posts);
    },

   show: (req, res) => {
      // localhost:3000/user/4
      // id = 4
      const { id } = req.params;
      const postResult = posts.find((post) => post.id === parseInt(id));
      
      if (!postResult) {
        return res.render("error", {
          title: "Ops!",
          message: "Post não encontrado",
        });
      }
      const post = {
         ...postResult,
         avatar: files.base64Encode(
           upload.path + postResult.avatar
         ),
       };
      console.log(post)
      return res.json(post);
    },


  store: (req, res) => {
    const { nome, email, titulo, mensagem , avatar } = req.body;
    let filename = "post-default.jpeg";
    if (req.file) {
      filename = req.file.filename;
    }
     const newPost = {
        id: posts.length + 1,
        nome,
        email,
        titulo,
        mensagem ,
        avatar: filename,
      };
     posts.push(newPost);
  
     return res.json(posts);
  },

  update: (req, res) => {
   const {id} = req.params
   const { nome, email, titulo, mensagem } = req.body;
   const postResult = posts.find((post) => post.id === parseInt(id));

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
    // if (avatar) updatePost.avatar = avatar;
    if (filename) {
      let avatarTmp = updatePost.avatar;
      fs.unlinkSync(upload.path + avatarTmp);
      updatePost.avatar = filename;
    }
   // posts[id] = (nome, email, titulo, mensagem , avatar)

   return res.json( posts)

},

delete: (req, res) => {
   const {id} = req.params
      posts.splice(id, 1)
      return res.json({message: `A postagem ${id} foi deletada`})
},

}
//*Destroy e create n adicionados
 


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


module.exports = postController;