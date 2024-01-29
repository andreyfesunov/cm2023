import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

export enum RootRoutes {
  App = 'cm'
}

const toApp = [RootRoutes.App];

export enum UserRoutes {
  Books = 'books',
  Auth = 'auth'
}

const toBooks = [...toApp, UserRoutes.Books];
const toAuth = [...toApp, UserRoutes.Auth];

export enum BooksRoutes {
  All = 'all',
  Create = 'create'
}

export const toAllBooks = [...toBooks, BooksRoutes.All];
const toBook = (id: number) => [...toBooks, id.toString()];
const toCreateBook = [...toBooks, BooksRoutes.Create];

export enum AuthRoutes {
  Login = 'login',
  Register = 'register'
}

const toLogin = [...toAuth, AuthRoutes.Login];
const toRegister = [...toAuth, AuthRoutes.Register];

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  public constructor(private readonly _router: Router) {
  }

  public toAllBooks(): void {
    this._router.navigate(toAllBooks);
  }

  public toBook(id: number): void {
    this._router.navigate(toBook(id));
  }

  public toCreateBook(): void {
    this._router.navigate(toCreateBook);
  }

  public toLogin(): void {
    this._router.navigate(toLogin);
  }
}
