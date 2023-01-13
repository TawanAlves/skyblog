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

  //   updateUserDocument: async (data: {
  //     documentFileFront: any;
  //     documentFileBack: any;
  //     documentFileSelf: any;
  //     documentNumber: string;
  //     countryIndex: number;
  //   }) => {
  //     let formData = new FormData();

  //     if (data.documentFileFront) {
  //       formData.append("upload", data.documentFileFront, "documentFileFront");
  //     }
  //     if (data.documentFileBack) {
  //       formData.append("upload", data.documentFileBack, "documentFileBack");
  //     }
  //     if (data.documentFileSelf) {
  //       formData.append("upload", data.documentFileSelf, "documentFileSelf");
  //     }

  //     formData.append("documentNumber", data.documentNumber);
  //     formData.append("countryIndex", data.countryIndex.toString());

  //     return await handleApi("/user/documents", "put", { formData: formData });
  //   },

  //   const response = await api[method](
  //     path,
  //     data.formData
  //       ? formData
  //       : {
  //           ...data.data,
  //           params: data.params,
  //         },
  //     _responseTypeOptions
  //   );
  //   return response.data;
  // };
  // export default api;

  createBlogPost: async (data) => {
    const { nome, date, email, titulo, mensagem, avatar } = data;
    const response = await api.post("/post/newpost", {
      date,
      nome,
      email,
      titulo,
      mensagem,
      avatar,
    });
    return response.data;
  },

  // /post/update/3

  updateBlogPost: async (postId) => {
    const { nome, dia, mes, email, titulo, mensagem, avatar } = data;
    const response = await api.put(`/post/update/${postId}`, {
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
