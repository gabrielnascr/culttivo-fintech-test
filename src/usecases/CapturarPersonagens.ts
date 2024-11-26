import { Personagem } from "../models/Personagem";
import { capturarPersonagens } from "../services/marvel/api";
import seriabilizarPersonagem from "../utils/seriabilizarPersonagem";

export class CapturarPersonagensUseCase {
  public async execute(input: Input): Promise<Personagem[]> {
    const data = await capturarPersonagens({
      limit: input.limit,
      offset: input.offset,
    });

    const personagensSeriabilized = seriabilizarPersonagem(data.results);
    return personagensSeriabilized;
  }
}

export type Input = {
  offset: number;
  limit: number;
};
