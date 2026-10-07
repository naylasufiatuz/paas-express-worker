import { httpServerHandler } from "cloudflare:node";
import express from "express";

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

// Pengayaan: response HTML sederhana (tema emerald)
app.get("/html", (req, res) => {
  res.type("html").send(`<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Express Worker</title>
  <style>
    body { margin:0; min-height:100vh; display:grid; place-items:center;
           background:#022c22; color:#ecfdf5; font-family:system-ui,sans-serif; }
    main { text-align:center; padding:24px; }
    h1 { color:#10b981; }
    a { color:#6ee7b7; }
  </style>
</head>
<body>
  <main>
    <h1>Express berjalan di Cloudflare Workers</h1>
    <p>Halaman ini dibuat oleh route Express, bukan file statis.</p>
    <p><a href="/api/status">Lihat /api/status</a></p>
  </main>
</body>
</html>`);
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
