export const _getQueryString = (data) => {
  // Create a cloned object
  const clonedObj = JSON.parse(JSON.stringify(data));

  //   Delete invalid properties
  for (const [key, value] of Object.entries(clonedObj)) {
    if ([null, undefined, ""].includes(value) || typeof value === "object") {
      delete clonedObj[key];
    }
  }

  const queryString = Object.keys(clonedObj)
    .map((key) => key + "=" + clonedObj[key])
    .join("&");

  return queryString;
};

export const debounceFunc = (func, handler, delay) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};
