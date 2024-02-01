import {ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IRegisterRequest} from "../../interfaces/auth";
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {RouterService} from "../../../../router.service";

interface IRegisterFormGroup {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-register-page',
  styleUrls: ['register-page.component.scss'],
  templateUrl: 'register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'register-page'
  }
})
export class RegisterPageComponent implements OnDestroy {
  public constructor(
    private readonly _authService: AuthService,
    private readonly _routerService: RouterService
  ) {
  }

  protected hasError$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  protected readonly formGroup: FormGroup<IRegisterFormGroup> = new FormGroup<IRegisterFormGroup>({
    name: new FormControl<string | null>(null, [
      Validators.required
    ]),
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
      const dto: IRegisterRequest = {
        name: this.formGroup.controls.name.value!,
        email: this.formGroup.controls.email.value!,
        password: this.formGroup.controls.password.value!
      }

      this._subscription.add(
        this._authService.register(dto).pipe(
          tap(() => this.hasError$.next(false))
        ).subscribe({
          next: () => this.onSuccess(),
          error: () => this.onError()
        })
      );
    } else {
      this.formGroup.markAllAsTouched();
    }
  }

  private onSuccess(): void {
    this._routerService.toLogin();
  }

  private onError(): void {
    this.hasError$.next(true);
  }
}
