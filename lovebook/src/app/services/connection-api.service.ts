import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/Comentarios';


@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(private http: HttpClient) { }

  getBooks(Livro: string, Categoria: string, Autor: string, Editora: string): Observable<any> {

    let url = 'http://localhost:8080/book'

    const params = new HttpParams()
      .set('nome', Livro)
      .set('categoria', Categoria)
      .set('autor', Autor)
      .set('editora', Editora)

    return this.http.get(url, {params})
  }

  login(credentials: any): Observable<any>{
    let url = 'http://localhost:8080/auth'
    return this.http.post(url, credentials)
  }

  identificacaoUsuario(): Observable<any>{
    let url = 'http://localhost:8080/user'
    return this.http.get(url)
  }

  identificacaoLivro(): Observable<any>{
    let url = 'http://localhost:8080/book'
    return this.http.get(url)
  }

  getComentarios(Id: any): Observable<any>{
    let url = 'http://localhost:8080/comments'

    const params = new HttpParams()
      .set('idDoLivro', Id)

    return this.http.get(url, {params})
  }

  postComentarios(comentario: any): Observable<any>{
    let url = 'http://localhost:8080/comments'
    return this.http.post(url, comentario);
  }

  postRegistrar(registrar: any): Observable<any>{
    let url = 'http://localhost:8080/user'
    return this.http.post(url, registrar);
  }
  
}
