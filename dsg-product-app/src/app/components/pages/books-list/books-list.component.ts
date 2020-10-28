import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {


  books = new Array<Book>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBookData().subscribe((books) => {
      debugger;
      this.books = books.books;
      console.log(this.books);
    });
  }

}
