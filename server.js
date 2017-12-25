import Express from "express";
import { Nuxt, Builder } from "nuxt";
import Config from "./nuxt.config.js";
import API from "./api";

Config.dev = !(process.env.NODE_ENV === "production");

const app = Express();
const port = process.env.PORT || 3000;
const nuxt = new Nuxt(Config);

if (nuxt.options.dev) {
  new Builder(nuxt).build();
}

app.set("port", port);
app.use("/api", API);
app.use(nuxt.render);
app.listen(port, () => console.log("\nServer has started.\n"));
