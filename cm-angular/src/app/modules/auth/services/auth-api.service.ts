import {Injectable} from "@angular/core";
import {ILoginRequest, IRegisterRequest} from "../interfaces/auth";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  public constructor(
    private readonly _httpClient: HttpClient
  ) {
  }

  protected readonly controller = 'auth'

  private get _requestURL(): string {
    return environment.apiRoot + this.controller;
  }

  public login(dto: ILoginRequest): Observable<{ accessToken: string }> {
    return this._httpClient.post<{ accessToken: string }>(this._requestURL + "/login", dto);
  }

  public register(dto: IRegisterRequest): Observable<void> {
    return this._httpClient.post<void>(this._requestURL + "/register", dto);
  }
}
