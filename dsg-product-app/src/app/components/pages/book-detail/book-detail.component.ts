import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, AfterViewInit, OnDestroy {


  selectedBook: Book = new Book(0, '', '', '', '', '', '', '');
  id = 0;
  canSendEmail = false;
  protected authSubscription: Subscription;
  user: SocialUser;

  constructor(
    private dataService: DataService,
    private authService: SocialAuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,) { }



  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        this.id = +params['id'] || 0;
        console.log('Query params ', this.id);
      });

    this.authSubscription = this.authService.authState.subscribe((user) => {
      debugger;
      if (user !== null && user !== undefined) {
        this.user = user;
        this.canSendEmail = true;
      }

    });
  }

  ngAfterViewInit(): void {
    this.dataService.getBookData().subscribe((books) => {
      debugger;
      this.selectedBook = books.books.find(book => book.id === this.id);
    });
    console.log('selected book');
    console.log(this.selectedBook);

  }

  sendEmail() {

    const email = this.user.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/mleonrqp',
      {
        name: this.user.name,
        replyto: this.user.email,
        message: this.createMessage()
      },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );

  }

  createMessage(): string {

    let message =
      "Hi there \n\n'"
      + "We see you are interested in "
      + this.selectedBook.name
      + "thats about"
      + "\n\n"
      + this.selectedBook.shortDescription
      + "\n\n"
      + "Its only "
      + this.selectedBook.price
      + " Quite a bargain right?";

    return message;

  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  close() {
    this.router.navigateByUrl('books-list');
  }

}
