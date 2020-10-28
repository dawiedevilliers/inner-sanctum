import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private bookUrl = '../../assets/data/books.json';

  constructor(private http: HttpClient) {

  }

  getBookData() {

    const result = this.http.get<any>(this.bookUrl);

    console.log(result);

    return result;
  }



}
