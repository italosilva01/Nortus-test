import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    // Não adiciona token nas rotas de login e refresh-token
    if (
      config.url?.includes("login") ||
      config.url?.includes("refresh-token")
    ) {
      return config;
    }

    // No cliente, busca a sessão
    if (typeof window !== "undefined") {
      // o getSession está  ?retornando o token acess antigo
      const session = await getSession();
      const accessToken = session?.user?.accessToken;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        console.warn("[API Interceptor] AccessToken não encontrado na sessão");
      }
    }

    return config;
  },
  (error) => {
    console.error("[API Interceptor] Erro:", error);
    return Promise.reject(error);
  }
);

export default api;
