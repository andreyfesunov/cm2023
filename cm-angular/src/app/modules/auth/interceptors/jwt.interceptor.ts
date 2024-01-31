import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthTokenService} from "../services/auth-token.service";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public constructor(
    private readonly _authTokenService: AuthTokenService,
    private readonly _authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = this._authTokenService.token$.value;
    if (token !== null) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(req).pipe(
      catchError((response) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this._authService.logout();
        }
        return throwError(() => response);
      })
    );
  }

}
