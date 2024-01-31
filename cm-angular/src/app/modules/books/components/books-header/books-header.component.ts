import {ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-books-header',
  template: `
    <div class="books__header">
      <ng-container *ngTemplateOutlet="leftRef"></ng-container>
      <div class="divider"></div>
      <ng-container *ngTemplateOutlet="rightRef"></ng-container>
    </div>
  `,
  styleUrls: ['books-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksHeaderComponent {
  @Input() public leftRef: TemplateRef<null> | null = null;
  @Input() public rightRef: TemplateRef<null> | null = null;
}
