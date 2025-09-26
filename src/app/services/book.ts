// File: src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define uma interface para o nosso objeto 'Book'.
// Isso nos dá tipagem forte e autocompletar no código.
export interface Book {
  id?: number; // O ID é opcional ao criar um novo livro
  title: string;
  author: string;
  isbn: string;
  publicationYear: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // A URL base da nossa API.
  // O Angular fará as chamadas para http://localhost:8080/api/v1/books
  private apiUrl = 'http://localhost:8080/api/v1/books';

  // Injeção de dependência do HttpClient
  constructor(private http: HttpClient) { }

  // Método para buscar todos os livros.
  // Retorna um Observable que emitirá um array de Livros.
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
