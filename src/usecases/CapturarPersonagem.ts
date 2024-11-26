import { capturarPersonagem } from "../services/marvel/api";
import seriabilizarPersonagem from "../utils/seriabilizarPersonagem";

export class CapturarPersonagemUseCase {
  public async execute(id: number): Promise<any> {
    const data = await capturarPersonagem(id);

    const personagensSeriabilized = seriabilizarPersonagem(data.results);
    return personagensSeriabilized[0];
  }
}

export type Input = {
  offset: number;
  limit: number;
};
