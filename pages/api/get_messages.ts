import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
import { verify } from "jsonwebtoken";
import { secret } from "./secret/secret";

const authenticated =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    verify(req.headers.authorization!, secret, async function (err, decoded) {
      if (!err && decoded) {
        return await fn(req, res);
      }
      res.status(500).json({ message: "Not authenticated" });
    });
  };
export default authenticated(async function getMessages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  const message = await db.all("select * from message");
  if (req.method !== "GET") {
    res.status(405).json({ message: "Only GET" });
  }

  res.json(message);
});
