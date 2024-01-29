import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ILoginRequest} from "../../interfaces/auth";

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
})
export class LoginPageComponent {
  public constructor(
    private readonly _authService: AuthService
  ) {
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

  protected onSubmit(): void {
    if (this.formGroup.valid) {
      const request: ILoginRequest = {
        email: this.formGroup.controls.email.value!,
        password: this.formGroup.controls.password.value!
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
