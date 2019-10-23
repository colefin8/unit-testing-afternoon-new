export const shortenText = text => {
  let shortened = text.trim().substr(0, 100);
  shortened.length === 100 && (shortened += "...");
  return shortened;
};
