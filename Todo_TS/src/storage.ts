export const storageSetItem = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
export const storageGetItem = (key: string, defaultValue: string) => {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  } catch (e) {
    console.log(e);
    return defaultValue;
  }
};