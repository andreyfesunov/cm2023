import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Observable} from "rxjs";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../interfaces/books";
import {BooksAbstractService} from "./books-abstract.service";

@Injectable({
  providedIn: 'root'
})
export class BooksApiService extends BooksAbstractService {
  public constructor(
    private readonly _httpClient: HttpClient
  ) {
    super()
  }

  protected readonly controller = 'books'

  private get _requestURL(): string {
    return environment.apiRoot + this.controller;
  }

  public getList(): Observable<IBook[]> {
    return this._httpClient.get<IBook[]>(this._requestURL);
  }

  public create(dto: ICreateBookRequest): Observable<IBook> {
    return this._httpClient.post<IBook>(this._requestURL, dto);
  }

  public getById(id: string): Observable<IBook> {
    return this._httpClient.get<IBook>(this._requestURL + `/${id}`);
  }

  public update(dto: IUpdateBookRequest): Observable<IBook> {
    return this._httpClient.put<IBook>(this._requestURL + `/${dto.id}`, dto);
  }

  public clear(): Observable<void> {
    return this._httpClient.delete<void>(this._requestURL);
  }

  public override delete(id: string): Observable<void> {
    return this._httpClient.delete<void>(this._requestURL + `/${id}`);
  }
}
