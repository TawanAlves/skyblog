// const request = require("supertest");
// const server = require("../../server");

// describe("Teste my app server", () => {
//   it("should get main route", async () => {
//     const res = await request(server).get("/");

//     console.log(res);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHave([]);
//   });

//     it("should get with id route", async () => {
//      const res = await request(server).get("/661728b0-92f5-11ed-ae5e-ef9f7d26733a");
//      console.log(res);

//      expect(res.statusCode).toEqual(200);
//      expect(res.body).toHave({
//       id: "661728b0-92f5-11ed-ae5e-ef9f7d26733a",
//       date: "2023-07-28T02:54:58.188Z",
//       nome: "Roberto",
//       email: "robertinho123@email.com",
//       titulo: "Titulo da postagem",
//       mensagem:
//         "Viajar é preciso.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
//       avatar: "jat.jpg",
//       // A imagem deve vir no formato complet, mudar isso
//     });

//    });

//    it("should get main route", async () => {

//     const res = await request(server)
//     .post("/post/newpost");
//     .send({
//       date: "2023-07-28T02:54:58.188Z",
//       nome: "João",
//       email: "joao@email.com",
//       titulo: "Titulo da postagem do joão",
//       mensagem:
//         "Viajar é preciso.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
//       avatar: "jat.jpg",
//     })
//     // console.log(res);

//      expect(res.statusCode).toEqual(200);
//   });

//   it("should get main route", async () => {
//     const res = await request(server).put("/post/update/661728b0-92f5-11ed-ae5e-ef9f7d26733a");
//     .send({

//     })
//     console.log(res);

//     expect(res.statusCode).toEqual(200);
//   });

// });
