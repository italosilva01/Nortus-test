import api from "@/shared/lib/api";

export const authEndpoints = {
  login: async () => {
    try {
      return await api.get('/login.json');
    } catch {
      throw new Error('Login request failed');
    }
  },
}
