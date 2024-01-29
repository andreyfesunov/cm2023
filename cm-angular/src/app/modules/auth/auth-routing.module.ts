import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthRoutes} from "../../router.service";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";

const routes: Routes = [
  {
    path: AuthRoutes.Login,
    component: LoginPageComponent,
  },
  {
    path: AuthRoutes.Register,
    component: RegisterPageComponent,
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: AuthRoutes.Login
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
