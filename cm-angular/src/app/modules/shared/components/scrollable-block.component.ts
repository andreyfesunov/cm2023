import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-scrollable-block',
  styleUrls: ['scrollable-block.component.scss'],
  templateUrl: 'scrollable-block.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'scrollable-block'
  }
})
export class ScrollableBlockComponent {
}
