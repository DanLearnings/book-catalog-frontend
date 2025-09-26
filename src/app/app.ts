import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list'; // <-- Importe aqui

@Component({
  selector: 'app-root',
  imports: [BookListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'book-catalog-frontend';
}
