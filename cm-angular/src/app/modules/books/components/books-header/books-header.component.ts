import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {RouterService} from "../../../../router.service";

@Component({
  selector: 'app-books-header',
  template: `
    <div class="books__header">
      <button mat-raised-button (click)="onClick()">Create</button>
    </div>
  `,
  styleUrls: ['books-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksHeaderComponent {
  public constructor(private readonly _routerService: RouterService) {
  }

  public onClick(): void {
    this._routerService.toCreateBook();
  }
}
