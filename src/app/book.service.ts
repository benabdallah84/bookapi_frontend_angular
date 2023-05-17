import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string="http://localhost:59412/api/Books";
  books:Book[] | undefined;
  book:Book | undefined;
  constructor(private http:HttpClient) { }
    getAllBooks(){
      this.http.get(this.url).toPromise().then(
        res => {
          this.books = res as Book[];
        }
      );
    }
    postBook(){
      return this.http.post(this.url,this.book);
    }
}
