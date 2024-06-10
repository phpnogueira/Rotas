import { log } from "console";
import "dotenv/config";
import express from "express";
import {
  ItemProdutos,
  buscarUsuario,
  buscarUsuarioQuery,
} from "./controladores";
import { Request, Response, NextFunction } from "express-serve-static-core";
import { intermediarioGeral, meuPrimeiroIntermediario } from "./intermediarios";

const servidor = express();

servidor.use(intermediarioGeral)

servidor.get("/produtos/:item", meuPrimeiroIntermediario, ItemProdutos);

servidor.get("/usuarios/:email", buscarUsuario);

servidor.get("/usuarios", buscarUsuarioQuery);

servidor.listen(process.env.PORT);
