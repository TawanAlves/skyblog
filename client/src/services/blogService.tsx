import api from "./api";

const blogService = {
  getBlogPost: async () => {
    const response = await api.get("/post");
    return response;
  },

  getPostId: async () => {
    const response = await api.get(`/post/1`);
    return response;
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
};

export default blogService;
