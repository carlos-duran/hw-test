const fastify = require("fastify");

const app = fastify({ logger: true });

app.get("/", async () => ({ hello: "world" }));

const start = async () => {
  try {
    await app.listen(process.env.PORT || 5000, "0.0.0.0");
    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
