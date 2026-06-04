export const customRequest = async (req) => {
  const url = new URL(req.url, "http://localhost:3000");
  req.pathname = url.pathname;
  req.query = url.searchParams;

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks).toString("utf-8");

  if (req.headers["content-type"]?.includes("application/json")) {
    req.body = JSON.parse(body);
  } else {
    req.body = body;
  }

  return req;
};
