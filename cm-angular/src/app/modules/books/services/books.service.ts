import {BooksAbstractService} from "./books-abstract.service";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../interfaces/books";
import {concat, Observable, of, shareReplay, switchMap, tap} from "rxjs";
import {BooksApiService} from "./books-api.service";
import {BooksEventEnum, BooksEventService} from "./books-event.service";

export class BooksService extends BooksAbstractService {
  public constructor(
    private readonly _booksApiService: BooksApiService,
    private readonly _booksRootService: BooksEventService
  ) {
    super();
  }

  private readonly _books$: Observable<IBook[]> = concat(of(0), this._booksRootService.event$).pipe(
    switchMap(() => this._booksApiService.getList()),
    shareReplay({
      bufferSize: 1,
      refCount: true
    })
  );

  public getList(): Observable<IBook[]> {
    return this._books$;
  }

  /**
   * Здесь можно сделать пайп от _books$,
   * но по заданию нужно использовать всё(
   */
  public getById(id: string): Observable<IBook> {
    return this._booksApiService.getById(id);
  }

  public create(dto: ICreateBookRequest): Observable<IBook> {
    return this._booksApiService.create(dto).pipe(
      tap(() => this._booksRootService.event$.next({
        type: BooksEventEnum.Created
      }))
    );
  }

  public update(dto: IUpdateBookRequest): Observable<IBook> {
    return this._booksApiService.update(dto).pipe(
      tap(() => this._booksRootService.event$.next({
        type: BooksEventEnum.Updated
      }))
    );
  }

  public clear(): Observable<void> {
    return this._booksApiService.clear().pipe(
      tap(() => this._booksRootService.event$.next({
        type: BooksEventEnum.Cleared
      }))
    );
  }

  public delete(id: string): Observable<void> {
    return this._booksApiService.delete(id).pipe(
      tap(() => this._booksRootService.event$.next({
        type: BooksEventEnum.Deleted
      }))
    );
  }
}
