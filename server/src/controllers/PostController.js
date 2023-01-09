

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

const postController = {

   index: (req, res) => {
      return res.render("posts", {  posts });
    },

   show: (req, res) => {
      // Pega o parametro que vem da url, ou seja, na url a baixo, pegaria o valor 4
      // localhost:3000/user/4
      // id = 4
      const { id } = req.params;
      const postResult = posts.find((post) => post.id === parseInt(id));
      // const postResult = posts.find((post) => post.id.toString() === id);
      if (!postResult) {
        return res.render("error", {
          title: "Ops!",
          message: "Usuário não encontrado",
        });
      }
      const post = {
         ...postResult,
      //   avatar: files.base64Encode(
      //     upload.path + postResult.avatar
      //   ),
       };
      console.log(post)
      return res.render("post", {  
        post,
      });
    },

}

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