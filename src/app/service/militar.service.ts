import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  RequestOptionsArgs,
  RequestOptions
} from "@angular/http";
import { HttpHeaders } from "@angular/common/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import config from "../config";
import { Observable } from "rxjs/Observable";
import Militar from "../model/militar.class";

@Injectable()
export class MilitarService {

  header = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http) {}

  index(): Observable<Militar[]> {
    return this.http
      .get(config.API_URL)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  show(id): Observable<Militar> {
    return this.http
      .get(config.API_URL + "/" + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  put(id, militar: Militar): Observable<Militar> {
    const newMilitar = this.formatMilitar(militar);
    return this.http
      .put(config.API_URL + "/" + id, newMilitar)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  store(militar: Militar): Observable<Militar> {
    const newMilitar = this.formatMilitar(militar);
    
    return this.http
      .post(config.API_URL,newMilitar)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  delete(id): Observable<Militar> {
    return this.http
      .delete(config.API_URL + "/" + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(
      error.json().error || "Erro ao retornar dados do militar"
    );
  }

  private formatDate(date) {
    const from = date.split("/");
    const f = new Date(`${from[2]}/${from[1]}/${from[0]}`);
    let dia = f.getDate().toString();
    let mes = (f.getMonth() + 1).toString();
    let ano = f.getFullYear().toString();

    if (mes.length < 2) mes = "0" + mes;
    if (dia.length < 2) dia = "0" + dia;

    return [ano, mes, dia].join("-");
  }

  private formatMilitar(militar: Militar) {
    return {
      nome: militar.nome,
      patente: militar.patente,
      identidade: militar.identidade,
      servicoObrigatorio: militar.servicoObrigatorio,
      nascimento: this.formatDate(militar.nascimento)
    };
  }
}
