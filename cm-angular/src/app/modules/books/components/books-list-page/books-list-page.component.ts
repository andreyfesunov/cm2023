import {ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {IBook} from "../../interfaces/books";
import {RouterService} from "../../../../router.service";
import {BooksAbstractService} from "../../services/books-abstract.service";

@Component({
  selector: 'app-books-list-page',
  styleUrls: ['books-list-page.component.scss'],
  templateUrl: 'books-list-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'books-list-page'
  }
})
export class BooksListPageComponent implements OnDestroy {
  public constructor(private readonly _booksService: BooksAbstractService,
                     private readonly _routerService: RouterService) {
  }

  public ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  protected books$: Observable<IBook[]> = this._booksService.getList();
  private readonly _subscription: Subscription = new Subscription();

  protected openEdit(id: string): void {
    this._routerService.toBook(id);
  }

  protected onCreate(): void {
    this._routerService.toCreateBook();
  }

  protected onGenerate(): void {
    this._subscription.add(
      this._booksService.generate(5).subscribe()
    );
  }

  protected onClear(): void {
    this._subscription.add(
      this._booksService.clear().subscribe()
    );
  }

  protected onDelete(id: string): void {
    this._subscription.add(
      this._booksService.delete(id).subscribe()
    );
  }
}
