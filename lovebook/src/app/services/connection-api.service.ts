import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(private http: HttpClient) { }

  getBooks(Livro: string, Categoria: string): Observable<any> {

    let url = 'http://localhost:8080/book'

    const params = new HttpParams()
      .set('nome', Livro)
      .set('categoria', Categoria)

    return this.http.get(url, {params})
  }

}
