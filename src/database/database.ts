import sqlite3 from "sqlite3";

export class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database("database.sqlite", (err) => {
      if (err) {
        console.log("Erro ao criar banco de dados");
        return;
      }

      this.db.run(`
            CREATE TABLE IF NOT EXISTS personagem (
                id INTEGER,
                name TEXT,
                description TEXT,
                thumbnail TEXT
            )    
        `);
    });
  }

  public getDb(): sqlite3.Database {
    return this.db;
  }
}
