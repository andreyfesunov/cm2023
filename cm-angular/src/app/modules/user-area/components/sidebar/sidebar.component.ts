import {Component} from "@angular/core";
import {routes} from "../../../../router.service";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {AuthService} from "../../../auth/services/auth.service";
import {BooksAbstractService} from "../../../books/services/books-abstract.service";

export interface INavItem {
  id: number,
  title: string,
  link: string[],
  icon: string | null,
  notificationsCount$: Observable<number> | null,
  if$: Observable<boolean>
}

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.scss"]
})
export class SidebarComponent {
  public constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _booksService: BooksAbstractService
  ) {
  }

  public navLinks: INavItem[] = [
    {
      id: 0,
      title: "Books",
      link: routes.books.index,
      icon: "collections_bookmark",
      notificationsCount$: this._booksService.getList().pipe(map((list) => list.length)),
      if$: this._authService.authorized$
    },
    {
      id: 1,
      title: "Login",
      link: routes.auth.login,
      icon: "person",
      notificationsCount$: null,
      if$: this._authService.authorized$.pipe(map((v) => !v))
    },
    {
      id: 2,
      title: "Register",
      link: routes.auth.register,
      icon: "person_add",
      notificationsCount$: null,
      if$: this._authService.authorized$.pipe(map((v) => !v))
    }
  ];

  protected isActive(item: INavItem): boolean {
    const matchArray = this._router.url.match(item.link.join('/'));
    if (matchArray === null) return false;
    return matchArray.length > 0;
  }

  public onClick(item: INavItem): void {
    this._router.navigate(item.link);
  }
}
