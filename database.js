const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  const db = await sqlite.open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
  await db.migrate({ force: "last" });

  const message = await db.all("SELECT * FROM Message");
  console.log(JSON.stringify(message));
}

setup();
