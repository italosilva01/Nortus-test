export const getStoredUsername = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    return localStorage.getItem('username');
  } catch {
    return null;
  }
};

export const clearStoredUsername = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('username');
};
