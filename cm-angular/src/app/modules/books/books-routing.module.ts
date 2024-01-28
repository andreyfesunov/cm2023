import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BooksListPageComponent} from "./components/books-list-page/books-list-page.component";
import {BooksCreateUpdatePageComponent} from "./components/books-create-update-page/books-create-update-page.component";
import {BooksRoutes} from "../../router.service";

const routes: Routes = [
  {
    path: BooksRoutes.All,
    component: BooksListPageComponent
  },
  {
    path: BooksRoutes.Create,
    component: BooksCreateUpdatePageComponent
  },
  {
    path: ':id',
    component: BooksCreateUpdatePageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: BooksRoutes.All
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {
}
