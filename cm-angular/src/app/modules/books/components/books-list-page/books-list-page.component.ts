import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {Observable} from "rxjs";
import {IBook} from "../../interfaces/books";
import {RouterService} from "../../../../router.service";
import {BooksService} from "../../services/books-abstract.service";

@Component({
  selector: 'app-books-list-page',
  styleUrls: ['books-list-page.component.scss'],
  templateUrl: 'books-list-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListPageComponent {
  public constructor(private readonly _booksService: BooksService,
                     private readonly _routerService: RouterService) {
  }

  public get books(): Observable<IBook[]> {
    return this._booksService.getList();
  }

  public openEdit(id: number): void {
    this._routerService.toBook(id);
  }
}
