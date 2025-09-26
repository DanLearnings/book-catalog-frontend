// File: src/app/components/book-list/book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BookService } from '../../services/book'; // Importamos nosso serviço e a interface

@Component({
  selector: 'app-book-list',
  standalone: true, // Este componente é standalone
  imports: [CommonModule], // Precisamos do CommonModule para usar diretivas como *ngFor
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent implements OnInit {

  // Uma propriedade para armazenar a lista de livros que virá da API
  books: Book[] = [];
  // Uma propriedade para sabermos se estamos carregando os dados
  isLoading = true;

  // Injetamos nosso BookService no construtor
  constructor(private bookService: BookService) { }

  // ngOnInit é um "gancho de ciclo de vida" que roda automaticamente quando o componente é criado
  ngOnInit(): void {
    this.loadBooks();
  }

  // Método para carregar os livros da API
  loadBooks(): void {
  console.log('1. Starting to load books...');
  this.isLoading = true;
  this.bookService.getBooks().subscribe({
    next: (data) => {
      console.log('2. Successfully received data:', data); // Vamos ver o que chegou
      this.books = data;
      this.isLoading = false;
      console.log('3. Finished loading. isLoading is now:', this.isLoading, 'books.length is:', this.books.length);
    },
    error: (err) => {
      console.error('2. Failed to load books', err);
      this.isLoading = false;
    }
  });
}
}
