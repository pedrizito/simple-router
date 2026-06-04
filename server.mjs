import { createServer } from "node:http";
import { Router } from "./src/router.mjs";
import { customRequest } from "./src/customRequest.mjs";
import { customResponse } from "./src/customResponse.mjs";

const router = new Router();

router.defineRoute("GET", "/", (req, res) => {
  res.end("Hellow world!");
});

const server = createServer(async (request, response) => {
  const req = await customRequest(request);
  const res = await customResponse(response);

  const handler = router.find(req.method, req.pathname);

  if (handler) {
    handler(req, res);
  } else {
    res.status(500).end("Route not find!");
  }
});

server.listen(3000, () => {
  console.log("Server online");
});
