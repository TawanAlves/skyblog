import api from "./api";

const blogService = {
  getBlogPost: async () => {
    const response = await api.get("/post");
    return response.data;
  },

  getPostId: async (postId: string) => {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  },

  // updateUserDocument: async (data: {
  //   date: string;
  //   nome: string;
  //   email: string;
  //   titulo: string;
  //   mensagem: string;
  //   avatar: any;
  // }) => {
  //   let formData = new FormData();

  //   formData.append("avatar", data.avatar, "documeavatarntFileFront");
  //   formData.append("date", data.date);
  //   formData.append("nome", data.nome);
  //   formData.append("email", data.email);
  //   formData.append("titulo", data.titulo);
  //   formData.append("mensagem", data.mensagem);
  //   return await { formData: formData };
  // },

  // const newPostData = {
  //   getBlogPost: async () => {
  //     const formData = new FormData();

  //     formData.append("avatar", data.avatar, "avatar");
  //     formData.append("date", data.date);
  //     formData.append("nome", data.nome);
  //     formData.append("email", data.email);
  //     formData.append("titulo", data.titulo);
  //     formData.append("mensagem", data.mensagem);

  //   }

  // },
  // updateUserDocument: async (data: {
  //   date: string;
  //   nome: string;
  //   email: string;
  //   titulo: string;
  //   mensagem: string;
  //   avatar: any;
  // }) => {
  //   var formData = new FormData();
  //   formData.append("avatar", data.avatar, "avatar");
  //   formData.append("date", data.date);
  //   formData.append("nome", data.nome);
  //   formData.append("email", data.email);
  //   formData.append("titulo", data.titulo);
  //   formData.append("mensagem", data.mensagem);
  // },

  createBlogPost: async (data: {
    date: any;
    nome: string;
    email: string;
    titulo: string;
    mensagem: string;
    avatar: any;
  }) => {
    const { nome, date, email, titulo, mensagem, avatar } = data;
    var formData = new FormData();
    formData.append("avatar", data.avatar, "avatar");
    formData.append("date", data.date);
    formData.append("nome", data.nome);
    formData.append("email", data.email);
    formData.append("titulo", data.titulo);
    formData.append("mensagem", data.mensagem);
    const response = await api.post("/post/newpost", formData, {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    });

    // return response.data.formData;
  },

  // /post/update/3

  updateBlogPost: async (postId: string) => {
    // const { nome, dia, mes, email, titulo, mensagem, avatar } = data;
    // const response = await api.put(`/post/update/${postId}`, {
    //   dia,
    //   mes,
    //   nome,
    //   email,
    //   titulo,
    //   mensagem,
    //   avatar,
    // });

    const response = await api.get(`/post/${postId}`);
    return response.data;
  },

  deletPost: async (postId: string) => {
    // const newId = postId - 1;
    const response = await api.delete(`/post/delete/${postId}`);
    console.log("excluido");
    // alert("Postagem deleteada");
    return response;
  },

  //Todo: erro de criação de postagem, deletando uma postagem a proxima vem com o número da posição do array, causando postagens com mesmo id, travando o delete de uma delas
};

export default blogService;
