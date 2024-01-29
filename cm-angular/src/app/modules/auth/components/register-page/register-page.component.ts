import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IRegisterRequest} from "../../interfaces/auth";

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
  encapsulation: ViewEncapsulation.None
})
export class RegisterPageComponent {
  public constructor(
    private readonly _authService: AuthService
  ) {
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

  protected onSubmit(): void {
    if (this.formGroup.valid) {
      const request: IRegisterRequest = {
        name: this.formGroup.controls.name.value!,
        email: this.formGroup.controls.email.value!,
        password: this.formGroup.controls.password.value!
      }
    } else {
      this.formGroup.markAllAsTouched();
    }
  }
}
