import "dotenv/config";
import express, { Request, Response } from "express";

import { CapturarPersonagensUseCase } from "./usecases/CapturarPersonagens";
import { CapturarPersonagemUseCase } from "./usecases/CapturarPersonagem";

const app = express();

const capturarPersonagensUseCase = new CapturarPersonagensUseCase();
const capturarPersonagemUseCase = new CapturarPersonagemUseCase();

app.get("/personagens", async (req: Request, res: Response) => {
  const personagens = await capturarPersonagensUseCase.execute({
    limit: Number(req.query.limit),
    offset: Number(req.query.offset),
  });

  res.json(personagens).send();
});

app.get("/personagens/:id", async (req: Request, res: Response) => {
  const personagemId = Number(req.params.id);
  const personagem = await capturarPersonagemUseCase.execute(personagemId);
  res.json(personagem).send();
});

export default app;
