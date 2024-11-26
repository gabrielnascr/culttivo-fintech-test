import "dotenv/config";
import axios from "axios";
import environment from "../../../enviroment";

const marvelApiInstance = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    ...environment,
  },
});

export type PersonagemResposta = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type CapturarPersonagemResposta = {
  data: {
    limit: number;
    offset: number;
    total: number;
    results: PersonagemResposta[];
  };
};

const capturarPersonagens = async (pagination: {
  limit: number;
  offset: number;
}) => {
  const {
    data: { data },
  } = await marvelApiInstance.get<CapturarPersonagemResposta>("/characters", {
    params: {
      ...pagination,
    },
  });
  return data;
};

const capturarPersonagem = async (id: number) => {
  const {
    data: { data },
  } = await marvelApiInstance.get<CapturarPersonagemResposta>(
    `/characters/${id}`
  );
  return data;
};

export { capturarPersonagens, capturarPersonagem };
