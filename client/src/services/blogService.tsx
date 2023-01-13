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
  },

  deletPost: async (postId: string) => {
    const response = await api.delete(`/post/delete/${postId}`);
    console.log("excluido");
    return response;
  },
};

export default blogService;
