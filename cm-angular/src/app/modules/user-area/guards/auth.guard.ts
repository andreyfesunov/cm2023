import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../../auth/services/auth.service";
import {map, tap} from "rxjs";
import {RouterService} from "../../../router.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthService = inject(AuthService);
  const routerService: RouterService = inject(RouterService);

  return authService.authorized$
    .pipe(tap((authorized) => {
        if (!authorized) {
          routerService.toLogin();
        }
      })
    );
}

export const nonAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService: AuthService = inject(AuthService);
  const routerService: RouterService = inject(RouterService);

  return authService.authorized$
    .pipe(
      map((v) => !v),
      tap((notAuthorized) => {
        if (!notAuthorized) {
          routerService.toAllBooks();
        }
      })
    );
}
