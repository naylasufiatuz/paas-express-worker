# paas-express-worker

Node.js + Express yang berjalan di Cloudflare Workers (Minggu 5).

## Endpoint
| Path | Fungsi |
| --- | --- |
| `/` | JSON greeting |
| `/api/status` | JSON status |
| `/api/info` | JSON info (challenge redeploy) |
| `/api/log-test` | Menulis log untuk `wrangler tail` |
| `/api/time` | Waktu server |
| `/hello/:name` | Route parameter |
| `/html` | Response HTML |

## Perintah
```bash
npm run dev      # jalankan lokal
npm run deploy   # deploy ke workers.dev
npx wrangler tail  # lihat log real-time
```

## URL Live
`https://paas-express-worker.<subdomain>.workers.dev`
