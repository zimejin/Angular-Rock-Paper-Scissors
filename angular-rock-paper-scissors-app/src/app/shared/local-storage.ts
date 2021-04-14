export const localStorageAdapter = {
  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  },

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  },

  clear(): void {
    localStorage.clear();
  },
};

export const sessionStorageAdapter = {
  getItem(key: string): any {
    return JSON.parse(sessionStorage.getItem(key));
  },

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  },

  clear(): void {
    sessionStorage.clear();
  },
};
