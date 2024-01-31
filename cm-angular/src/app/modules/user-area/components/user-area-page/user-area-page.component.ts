import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-user-area-page',
  templateUrl: 'user-area-page.component.html',
  styleUrls: ['user-area-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'user-area-page'
  }
})
export class UserAreaPageComponent {
}
