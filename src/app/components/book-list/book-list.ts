// File: src/app/components/book-list/book-list.component.ts

// 1. Importe o ChangeDetectorRef
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Book, BookService } from '../../services/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  isLoading = true;

  // 2. Injete o ChangeDetectorRef no construtor
  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe({
      next: (data) => {
        // Atualizamos nossas variáveis normalmente
        this.books = data;
        this.isLoading = false;

        // 3. COMANDO FINAL: Forçamos a detecção de mudanças
        // Dizemos ao Angular: "Acredite em mim, o estado mudou. Verifique este componente e o atualize na tela."
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load books', err);
        this.isLoading = false;
        // Também é uma boa prática forçar aqui em caso de erro
        this.cdr.detectChanges();
      }
    });
  }
}
