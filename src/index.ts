import { httpServerHandler } from "cloudflare:node";
import express from "express";
import { landingPage } from "./landing";

const app = express();

// Middleware logger: dijalankan untuk setiap request (pengayaan)
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint wajib
app.get("/", (req, res) => {
  res.json({
    message: "Hello Express on Cloudflare Workers!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

// Endpoint tambahan untuk challenge redeploy
app.get("/api/info", (req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

// Endpoint untuk uji log (wrangler tail)
app.get("/api/log-test", (req, res) => {
  console.log("Endpoint /api/log-test dipanggil");
  res.json({
    logged: true
  });
});

// Pengayaan: waktu server
app.get("/api/time", (req, res) => {
  res.json({
    iso: new Date().toISOString(),
    timezone: "UTC"
  });
});

// Pengayaan: route parameter
app.get("/hello/:name", (req, res) => {
  res.json({
    message: `Halo, ${req.params.name}!`
  });
});

// Pengayaan: response HTML (landing page portofolio bertema emerald)
app.get("/html", (req, res) => {
  res.type("html").send(landingPage);
});

// Endpoint baru setelah deploy pertama (challenge redeploy)
app.get("/api/about", (req, res) => {
  res.json({
    name: "Nayla Sufiatuz",
    project: "paas-express-worker",
    message: "Endpoint ini ditambahkan setelah deploy pertama"
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });