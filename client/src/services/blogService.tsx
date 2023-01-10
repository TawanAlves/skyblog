import api from "./api";

const blogService = {
  getBlogPost: async () => {
    const response = await api.get("/post");
    return response;
  },
  //   createBlogPost: async (data: {
  //     id: number;
  //     nome: string;
  //     dia: number;
  //     mes: string;
  //     email: string;
  //     titulo: string;
  //     mensagem: string;
  //     avatar: any;
  //   }) => {
  //     const { id, nome, dia, mes, email, titulo, mensagem, avatar } = data;
  //     const response = await api.post("/post", {
  //       id,
  //       nome,
  //       dia,
  //       mes,
  //       email,
  //       titulo,
  //       mensagem,
  //       avatar,
  //     });
  //     return response.data;
  //   },
};

export default blogService;
