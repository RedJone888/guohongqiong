export const displayUrl = (url: string) => {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
};
