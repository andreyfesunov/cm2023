import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthRoutes} from "../../router.service";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";
import {authGuard, nonAuthGuard} from "../user-area/guards/auth.guard";
import {LogoutPageComponent} from "./components/logout-page/logout-page.component";

const routes: Routes = [
  {
    path: AuthRoutes.Login,
    component: LoginPageComponent,
    canActivate: [nonAuthGuard]
  },
  {
    path: AuthRoutes.Register,
    component: RegisterPageComponent,
    canActivate: [nonAuthGuard]
  },
  {
    path: AuthRoutes.Logout,
    component: LogoutPageComponent,
    canActivate: [authGuard]
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
