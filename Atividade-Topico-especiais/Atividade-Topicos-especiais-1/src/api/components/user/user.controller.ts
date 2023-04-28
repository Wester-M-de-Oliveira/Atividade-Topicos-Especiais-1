// Arquivo: user.controller.ts

import { Request, Response, request } from 'express';
import { App } from '../../../app';

var users = [{id: 1, nome: 'Wester', email: 'westerjesuino@gmail.com.com', usuario: 'wester', senha:'wester123', situacao:true},
{id: 2, nome: 'Joao', email: 'joao@gmail.com', usuario: 'careca', senha:'sou_mesmo', situacao:true}]
 
const insert = {id: 3, nome: 'Clayton', email: 'claytindograu@gmail.com', usuario: 'homemdopovo', senha:'amem', situacao:true}

export class UserController {

  // retorna usuarios
  public list(req: Request, res: Response) {
    res.status(200).json(users);
  }

  // cria um usuario
  public create(req:Request, res: Response) {

    users.push(insert) 

    res.status(200).json({message: 'função insert'});
  }

  // atualiza um usuario
  public update(data:any, res: Response) {
    res.status(200).json({message: 'função update'});
  }

  // deleta um usuario
  public delete(data:any, res: Response) {
    res.status(200).json({message: 'função destroy'});
  }
}