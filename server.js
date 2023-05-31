const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dotenv = require("dotenv");
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const hostname =
  process.env.NODE_ENV !== "production" ? "localhost" : process.env.HOST;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/book-a-session") {
        await app.render(req, res, "/book-a-session", query);
      } else if (pathname === "/become-a-tutor") {
        await app.render(req, res, "/become-a-tutor", query);
      } else if (pathname === "/faqs") {
        await app.render(req, res, "/faqs", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
