import {Observable} from "rxjs";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../interfaces/books";

export abstract class BooksService {
  public abstract getList(): Observable<IBook[]>;

  public abstract getById(id: number): Observable<IBook>;

  public abstract create(dto: ICreateBookRequest): Observable<number>;

  public abstract update(dto: IUpdateBookRequest): Observable<number>;
}
