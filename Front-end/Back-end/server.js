import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const { Pool } = pg;

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_wNt1beIF8SkH@ep-dry-band-ac6h23dq-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => {
  res.send("✅ API do Sistema de Rastreabilidade de Frota conectada ao Neon!");
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});