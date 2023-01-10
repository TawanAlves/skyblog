const userValidator = {
  storeValidator: (req, res, next) => {
    const { nome, email, titulo, mensagem} = req.body;
    console.log("entrei no validador");
console.log(nome, email, titulo, mensagem);
    if (!nome || !email || !titulo || !mensagem) {
      return res.render("post-create", {
        // title: "Cadastrar usuário",
        error: {
          message: "Preencha todos os campos!",
        },
      });
    }
    console.log(
      454
    );
    next();
  },
};
module.exports = userValidator;
