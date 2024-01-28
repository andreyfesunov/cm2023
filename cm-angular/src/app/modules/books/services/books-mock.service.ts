import {Injectable} from "@angular/core";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../interfaces/books";
import {map, Observable, of} from "rxjs";
import {BooksService} from "./books-abstract.service";

@Injectable()
export class BooksMockService extends BooksService {
  private readonly _books: IBook[] = predefinedBooks;
  private _id: number = 1;

  public getList(): Observable<IBook[]> {
    return of(0).pipe(
      map(() => this._books)
    )
  }

  public override getById(id: number): Observable<IBook> {
    return of(this._books.find((book) => book.id === id)!);
  }

  public create(dto: ICreateBookRequest): Observable<number> {
    const book = {
      id: this._id++,
      author: dto.author,
      title: dto.title
    };
    this._books.push(book);

    return of(0).pipe(
      map(() => book.id)
    );
  }

  public update(dto: IUpdateBookRequest): Observable<number> {
    const index = this._books.findIndex((v) => v.id === dto.id)!;
    this._books[index] = dto;

    return of(0).pipe(
      map(() => dto.id)
    );
  }
}

const predefinedBooks: IBook[] = [
  {
    id: 0,
    title: "Война и Мир",
    author: {
      firstName: "Лев",
      lastName: "Толстой"
    }
  },
  {
    id: 1,
    title: "Капитанская дочка",
    author: {
      firstName: "Александр",
      lastName: "Пушкин"
    }
  },
  {
    id: 2,
    title: "Отцы и дети",
    author: {
      firstName: "Иван",
      lastName: "Тургенев"
    }
  },
  {
    id: 3,
    title: "Солярис",
    author: {
      firstName: "Станислав",
      lastName: "Лем"
    }
  }
];
