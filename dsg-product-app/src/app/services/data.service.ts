import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private selectedIndex = new BehaviorSubject<any>(new Array());
  selectedIndexChanged = this.selectedIndex.asObservable();

  private bookUrl = '../../assets/data/books.json';

  constructor(private http: HttpClient) {

  }

  getBookData() {

    const result = this.http.get<any>(this.bookUrl);
    // this.selectedIndex.next(result.books)

    console.log(result);

    return result;
  }



}
