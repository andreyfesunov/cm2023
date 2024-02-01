import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {RouterService} from "../../../../router.service";

@Component({
  selector: 'app-logout-page',
  template: '',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutPageComponent implements OnInit {
  public constructor(private readonly _authService: AuthService, private readonly _routerService: RouterService) {
  }

  public ngOnInit(): void {
    this._authService.logout();
    this._routerService.toLogin();
  }
}
