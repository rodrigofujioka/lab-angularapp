import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Atleta } from './atleta';


@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  private resource = 'atleta';
  api = environment.urlBase+'/'+this.resource;

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os agenda
  getAtletas(): Observable<Atleta[]> {
    console.log(this.api);
    return this.httpClient.get<Atleta[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    // Obtem todos os agenda
    getAtletaByID(valor:number): Observable<Atleta> {
      console.log(this.api);
      return this.httpClient.get<Atleta>(this.api+'/'+valor)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    // salva um Contato
    saveAtleta(atleta: Atleta): Observable<Atleta> {
      console.log(this.api);
      console.log( JSON.stringify(atleta));
      return this.httpClient.post<Atleta>(this.api, JSON.stringify(atleta), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }


  createAtleta() {
    return this.httpClient.get<Atleta>(this.api )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }



  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
      console.log(errorMessage, 'Client Error');
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      console.log(errorMessage, 'Server Error');
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
