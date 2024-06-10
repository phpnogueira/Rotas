import { log } from "console";
import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";

export const meuPrimeiroIntermediario = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("passei pelo intermediario");

  if (req.params.item === "sair") {
    return res.send(
      "A requisição foi respondida no intermediário, antes de chegar no controlador"
    );
  }

  next();
};

export const intermediarioGeral = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    console.log('Passou no intermediario geral');
    next()
};
