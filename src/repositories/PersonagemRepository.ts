import { Database } from "../database/database";
import { Personagem } from "../models/Personagem";

export class PersonagemRepository {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  public async create(personagem: Personagem) {
    const query = `INSERT INTO personagens VALUES (?)`;

    (await this.db.getDb()).run();
  }

  public async getById(id: number) {}
}
