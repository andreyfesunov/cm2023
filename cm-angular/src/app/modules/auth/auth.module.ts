import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const components = [
  LoginPageComponent,
  RegisterPageComponent
];

const matModules = []

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ...matModules
]

const providers = [];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [...modules, MatButtonModule, MatFormFieldModule, MatInputModule],
  providers: [...providers]
})
export class AuthModule {
}

@NgModule({
  imports: [AuthModule, AuthRoutingModule]
})
export class AuthModuleWithRouting {
}
