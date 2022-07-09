import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:3000';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<BookModel[]> {
    console.log(this.baseUrl + '/books');
    return this.http.get<BookModel[]>(this.baseUrl + '/books');
  }
}
