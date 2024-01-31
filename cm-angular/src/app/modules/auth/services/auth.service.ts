import {Injectable} from "@angular/core";
import {map, Observable, tap} from "rxjs";
import {ILoginRequest, IRegisterRequest} from "../interfaces/auth";
import {AuthApiService} from "./auth-api.service";
import {AuthTokenService} from "./auth-token.service";
import {RouterService} from "../../../router.service";

@Injectable({providedIn: 'root'})
export class AuthService {
  public constructor(
    private readonly _authApiService: AuthApiService,
    private readonly _authTokenService: AuthTokenService,
    private readonly _routerService: RouterService
  ) {
  }

  public readonly authorized$: Observable<boolean> = this._authTokenService.token$.pipe(
    map((v) => v !== null)
  );

  public login(dto: ILoginRequest): Observable<{ accessToken: string }> {
    return this._authApiService.login(dto).pipe(
      tap((response) => this._authTokenService.setToken(response.accessToken))
    );
  }

  public register(dto: IRegisterRequest): Observable<void> {
    return this._authApiService.register(dto);
  }

  public logout(): void {
    this._authTokenService.logout();
    this._routerService.toLogin();
  }
}
