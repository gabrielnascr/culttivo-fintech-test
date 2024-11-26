import { Personagem } from "../models/Personagem";
import { PersonagemResposta } from "../services/marvel/api";

export default function seriabilizarPersonagem(
  listaPersonagens: PersonagemResposta[]
): Personagem[] {
  const seriabilizedPersonagens = listaPersonagens.map((data) => {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      thumbnail: data.thumbnail.path + data.thumbnail.extension,
    };
  });
  return seriabilizedPersonagens;
}
