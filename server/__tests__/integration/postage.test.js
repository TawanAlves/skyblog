const request = require("supertest");
const server = require("../../server");

describe("Postage", () => {
  it("List posts", async () => {
    const res = await request(server).get("/post");
    expect(res.statusCode).toEqual(200);
  });
  it("List a posts", async () => {
    const res = await request(server).get(
      "/post/661728b0-92f5-11ed-ae5e-ef9f7d26733a"
    );
    expect(res.statusCode).toEqual(200);
  });
  it("Delete post - 661728b0-92f5-11ed-ae5e-ef9f7d26733a", async () => {
    const res = await request(server).delete(
      "/post/delete/661728b0-92f5-11ed-ae5e-ef9f7d26733a"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("post deletado");
  });

  it("New post", async () => {
    const res = await request(server).post("/post/newpost").send({
      date: "2023-12-15T02:54:58.188Z",
      nome: "Joaquim",
      email: "joaqui23@email.com",
      titulo: "Titulo da postagem do Joaquim ",
      mensagem:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora esse natus quibusdam neque illum? Cumque necessitatibus facilis eum. Facere amet, animi aut sequi nostrum atque? Impedit laudantium ab ipsum velit.",
      avatar: "1.jpg",
    });
    expect(res.statusCode).toEqual(200);
  });

  it("update - 4cf57170-92f5-11ed-ae5e-ef9f7d26733a", async () => {
    const res = await request(server)
      .put("/post/update/4cf57170-92f5-11ed-ae5e-ef9f7d26733a")
      .send({
        nome: "Novo Jose",
        email: "123jose@email.com",
      });
    expect(res.statusCode).toEqual(200);
  });
});
