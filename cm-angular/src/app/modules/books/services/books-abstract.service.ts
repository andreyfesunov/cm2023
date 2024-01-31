import {Observable} from "rxjs";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../interfaces/books";

export abstract class BooksAbstractService {
  public abstract getList(): Observable<IBook[]>;

  public abstract getById(id: string): Observable<IBook>;

  public abstract create(dto: ICreateBookRequest): Observable<IBook>;

  public abstract update(dto: IUpdateBookRequest): Observable<IBook>;

  public abstract clear(): Observable<void>;

  public abstract delete(id: string): Observable<void>;
}
