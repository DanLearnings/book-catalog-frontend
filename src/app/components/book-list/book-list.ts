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
    this.isLoading = true; // Começamos a carregar
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data; // Sucesso: armazenamos os livros
        this.isLoading = false; // Paramos de carregar
      },
      error: (err) => {
        console.error('Failed to load books', err); // Erro: mostramos no console
        this.isLoading = false; // Paramos de carregar
      }
    });
  }
}
