import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {

  constructor(private http: HttpClient) { }

  getBooks(Livro: any): Observable<any> {

    let url = 'localhost:8080/book'

    const params = new HttpParams().set('nome', Livro)

    return this.http.get(url, {params})
  }

}
