import { NextApiRequest, NextApiResponse } from "next";
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
export default async function getMessages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    const statement = await db.prepare(
      "INSERT INTO Message(message) VALUES(?)"
    );
    const result = statement.run(req.body.message);
    (await result).finalize();
  } else {
    res.status(405).json({ message: "Only POST" });
  }
  const message = await db.all("select * from message");

  res.json(message);
}
