import api from "./api";

const blogService = {
  getBlogPost: async () => {
    const response = await api.get("/post");
    return response.data;
  },

  getPostId: async (postId) => {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  },

  createBlogPost: async (data) => {
    const { nome, dia, mes, email, titulo, mensagem, avatar } = data;
    const response = await api.post("/post/newpost", {
      dia,
      mes,
      nome,
      email,
      titulo,
      mensagem,
      avatar,
    });
    return response.data;
  },

  deletPost: async (postId) => {
    const newId = postId - 1;
    const response = await api.delete(`/post/delete/${newId}`);
    console.log("excluido");
    // alert("Postagem deleteada");
    return response;
  },

  //Todo: erro de criação de postagem, deletando uma postagem a proxima vem com o número da posição do array, causando postagens com mesmo id, travando o delete de uma delas
};

export default blogService;
