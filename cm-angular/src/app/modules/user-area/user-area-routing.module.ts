import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserAreaPageComponent} from "./components/user-area-page/user-area-page.component";
import {UserRoutes} from "../../router.service";

const routes: Routes = [
  {
    path: "",
    pathMatch: 'prefix',
    component: UserAreaPageComponent,
    children: [
      {
        path: UserRoutes.Books,
        loadChildren: () => import('../books/books.module').then(m => m.BooksModuleWithRouting)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: UserRoutes.Books
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAreaRoutingModule {
}
