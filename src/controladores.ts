import { Request, Response } from "express";

const pessoas = [
  { nome: "philip", email: "philip@email.com" },
  { nome: "joão", email: "joao@email.com" },
  { nome: "maria", email: "maria@email.com" },
];

export const ItemProdutos = (req: Request, res: Response) => {
  console.log(req.params.item);

  return res.send("cheguei no controlador!!!!!");
};

export const buscarUsuario = (req: Request, res: Response) => {
  const { email } = req.params;

  const pessoa = pessoas.find((item) => {
    return item.email === email;
  });

  if (!pessoa) {
    return res.send("Pessoa não encontrada");
  }

  return res.send(pessoa);
};

export const buscarUsuarioQuery = (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email) {
    return res.send("parametro não informado");
  }

  const pessoa = pessoas.find((item) => {
    return item.email === email;
  });

  if (!pessoa) {
    return res.send("Pessoa não encontrada");
  }

  return res.send(pessoa);
};
