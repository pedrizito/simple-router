export const customResponse = (res) => {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (body) => {
    res.end(JSON.stringify(body));
  };
  return res;
};
