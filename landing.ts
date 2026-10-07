// Halaman landing portofolio (tema emerald) yang dilayani oleh route Express.
// Catatan: JavaScript di dalam string ini sengaja tidak memakai backtick atau ${}.
export const landingPage = `<!doctype html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nayla Sufiatuz | Express Worker</title>
  <style>
    :root { --e950:#022c22; --e900:#064e3b; --e600:#059669; --e500:#10b981; --e300:#6ee7b7; --e50:#ecfdf5; }
    * { box-sizing:border-box; margin:0; }
    body { font-family:system-ui,-apple-system,"Segoe UI",sans-serif; background:var(--e50); color:#052e22; line-height:1.65; }
    :focus-visible { outline:3px solid var(--e500); outline-offset:3px; }
    header { background:linear-gradient(160deg,var(--e950),var(--e900) 70%); color:var(--e50); padding:12vh 6vw 9vh; }
    .sapa { color:var(--e300); font-weight:600; margin-bottom:10px; }
    h1 { font-size:clamp(2.2rem,7vw,4.6rem); line-height:1.05; letter-spacing:-0.03em; max-width:15ch; }
    .lead { max-width:54ch; margin-top:20px; font-size:1.1rem; color:#d1fae5; }
    .aksi { display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
    .btn { font:inherit; font-weight:600; text-decoration:none; padding:11px 22px; border-radius:999px;
           border:2px solid var(--e500); background:var(--e500); color:var(--e950); }
    .btn:hover { background:var(--e300); border-color:var(--e300); }
    .btn.out { background:transparent; color:var(--e50); }
    .btn.out:hover { background:var(--e500); color:var(--e950); }
    section { max-width:980px; margin:0 auto; padding:8vh 6vw; }
    h2 { font-size:clamp(1.6rem,4vw,2.3rem); color:var(--e900); margin-bottom:14px; letter-spacing:-0.02em; }
    p { max-width:62ch; }
    .grid { display:grid; gap:16px; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); margin-top:18px; }
    .kartu { background:#fff; padding:22px; border-left:6px solid var(--e500); border-radius:4px 14px 14px 4px; }
    .kartu h3 { color:var(--e900); margin-bottom:8px; font-size:1.05rem; }
    .kartu code { display:block; background:var(--e50); padding:4px 10px; border-radius:8px; color:var(--e900);
                  font-size:.85rem; margin-bottom:10px; width:max-content; max-width:100%; }
    pre { white-space:pre-wrap; word-break:break-word; font-size:.85rem; color:#065f46; }
    footer { background:var(--e950); color:#a7f3d0; text-align:center; padding:24px 6vw; }
  </style>
</head>
<body>
  <header>
    <p class="sapa">Halo, selamat datang!</p>
    <h1>Nayla Sufiatuz, membangun backend pertamaku.</h1>
    <p class="lead">Halaman ini dibuat oleh route Express yang berjalan di Cloudflare Workers, bukan file statis. Data di bawah diambil langsung dari endpoint API saat halaman dibuka.</p>
    <div class="aksi">
      <a class="btn" href="#api">Lihat data live</a>
      <a class="btn out" href="/api/status">Buka /api/status</a>
    </div>
  </header>

  <section id="tentang">
    <h2>Tentang proyek ini</h2>
    <p>Ini tugas Minggu 5 mata pelajaran Platform as a Service: Node.js + Express dideploy ke Cloudflare Workers dan diakses lewat URL workers.dev.</p>
  </section>

  <section id="api">
    <h2>Data dari API</h2>
    <p>Setiap kartu memanggil endpoint Express dan menampilkan JSON hasilnya.</p>
    <div class="grid">
      <div class="kartu"><h3>Status</h3><code>GET /api/status</code><pre id="out-status">Memuat...</pre></div>
      <div class="kartu"><h3>Info</h3><code>GET /api/info</code><pre id="out-info">Memuat...</pre></div>
      <div class="kartu"><h3>Waktu server</h3><code>GET /api/time</code><pre id="out-time">Memuat...</pre></div>
    </div>
  </section>

  <footer><p>Express + Cloudflare Workers &middot; Platform as a Service</p></footer>

  <script>
    function muat(path, id) {
      fetch(path)
        .then(function (r) { return r.json(); })
        .then(function (d) { document.getElementById(id).textContent = JSON.stringify(d, null, 2); })
        .catch(function () { document.getElementById(id).textContent = "Gagal memuat " + path; });
    }
    muat("/api/status", "out-status");
    muat("/api/info", "out-info");
    muat("/api/time", "out-time");
  </script>
</body>
</html>`;
