import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './components/pages/book-detail/book-detail.component';
import { BooksListComponent } from './components/pages/books-list/books-list.component';
import { HomeComponent } from './components/pages/home/home.component';


const routes: Routes = [
  {
		path: '',
		redirectTo: '/books-list',
		pathMatch: 'full'
	},
  // { path: 'home', component: HomeComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
