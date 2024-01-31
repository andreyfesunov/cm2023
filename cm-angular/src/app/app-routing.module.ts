import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RootRoutes} from "./router.service";

const routes: Routes = [
  {
    path: RootRoutes.App,
    loadChildren: () => import('./modules/user-area/user-area.module').then(m => m.UserAreaModuleWithRouting)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RootRoutes.App
  },
  {
    path: '**',
    redirectTo: RootRoutes.App
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
