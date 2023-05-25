export const setSessionStorage = (name: any, item) => {
  return window.sessionStorage.setItem(name, item);
};
export const getSessionStorage = (name: any) => {
  return window.sessionStorage.getItem(name);
};

export const setLocalStorage = (name: any, item) => {
  return window.localStorage.setItem(name, item);
};
export const getLocalStorage = (name: any) => {
  return window.localStorage.getItem(name);
};
