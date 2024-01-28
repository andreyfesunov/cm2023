import {NgModule} from "@angular/core";
import {BooksRoutingModule} from "./books-routing.module";
import {BooksListPageComponent} from "./components/books-list-page/books-list-page.component";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {AuthorPipe} from "./pipes/author.pipe";
import {BooksCreateUpdatePageComponent} from "./components/books-create-update-page/books-create-update-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BooksHeaderComponent} from "./components/books-header/books-header.component";
import {MatCardModule} from "@angular/material/card";

const pipes = [AuthorPipe]

const components = [BooksListPageComponent, BooksCreateUpdatePageComponent, BooksHeaderComponent];

const modules = [
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  CommonModule,
  ReactiveFormsModule
]

const providers = [];

@NgModule({
  declarations: [...components, ...pipes],
  exports: [...components, ...pipes],
  imports: [...modules],
  providers: [...providers]
})
export class BooksModule {
}

@NgModule({
  imports: [BooksRoutingModule, BooksModule]
})
export class BooksModuleWithRouting {
}
