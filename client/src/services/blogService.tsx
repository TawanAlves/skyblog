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

  updateBlogPost: async (
    postId: string,
    data: {
      date: any;
      nome: string;
      email: string;
      titulo: string;
      mensagem: string;
      avatar: any;
    }
  ) => {
    const { nome, date, email, titulo, mensagem, avatar } = data;
    var formData = new FormData();
    if (data.nome) {
      formData.append("nome", data.nome);
    }
    if (data.email) {
      formData.append("email", data.email);
    }
    if (data.titulo) {
      formData.append("titulo", data.titulo);
    }
    if (data.mensagem) {
      formData.append("mensagem", data.mensagem);
    }
    if (data.avatar) {
      formData.append("avatar", data.avatar, "avatar");
    }

    const response = await api.put(`/post/update/${postId}`, formData, {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    });

    // const response = await api.put(`/post/update/${postId}`, {
    //   dia,
    //   mes,
    //   nome,
    //   email,
    //   titulo,
    //   mensagem,
    //   avatar,
    // });

    // const response = await api.get(`/post/${postId}`);
    // return response.data;
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
