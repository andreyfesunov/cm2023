import {ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ILoginRequest} from "../../interfaces/auth";
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {RouterService} from "../../../../router.service";

interface ILoginFormGroup {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page'
  }
})
export class LoginPageComponent implements OnDestroy {
  public constructor(
    private readonly _authService: AuthService,
    private readonly _routerService: RouterService
  ) {
  }

  protected hasError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  protected readonly formGroup: FormGroup<ILoginFormGroup> = new FormGroup<ILoginFormGroup>({
    email: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string | null>(null, [
      Validators.required
    ])
  });
  private readonly _subscription: Subscription = new Subscription();

  protected onSubmit(): void {
    if (this.formGroup.valid) {
      const dto: ILoginRequest = {
        email: this.formGroup.controls.email.value!,
        password: this.formGroup.controls.password.value!
      }

      this._subscription.add(
        this._authService.login(dto)
          .pipe(tap(() => this.hasError$.next(false)))
          .subscribe({
            next: () => this.onSuccess(),
            error: () => this.onError()
          })
      );
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  private onSuccess(): void {
    this._routerService.toAllBooks();
  }

  private onError(): void {
    this.hasError$.next(true);
  }
}
