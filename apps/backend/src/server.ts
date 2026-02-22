import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3001;
const secret = process.env.JWT_SECRET;

const corsOrigin = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOrigin));
app.use(express.json());
app.listen(port, () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🚀 Servidor Nortus Backend iniciado!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`📡 Porta: ${port}`);
  console.log(`🌍 URL: http://localhost:${port}`);
  console.log(`📍 API: http://localhost:${port}/api`);
  console.log(`💚 Health: http://localhost:${port}/health`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
});

app.use("/api", router);

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "API Nortus Backend está funcionando!",
    timestamp: new Date().toISOString(),
  });
});

// Rota raiz
app.get("/", (_req, res) => {
  res.json({
    secret: secret,
    message: "🚀 Bem-vindo à API Nortus",
    version: "1.0.0",
    documentation: "/api",
  });
});
