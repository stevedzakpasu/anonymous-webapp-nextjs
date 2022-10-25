import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { sign } from "jsonwebtoken";
import { secret } from "./secret/secret";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    const username = await db.get(
      "Select * from user where username = 'admin' "
    );
    const password = await db.get(
      "Select * from user where  password = 'admin' "
    );
    if (username && password) {
      const claims = { sub: username.id, username: username.username };
      const jwt = sign(claims, secret, {
        expiresIn: "1h",
      });
      res.json({ authToken: jwt });
    } else {
      res.json({ message: "error" });
    }
    console.log(req.body.username);

    const user = await db.all("select * from user");
    res.json(user);
  } else {
    res.status(405).json({ message: "Only POST" });
  }
}
