import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAreaPageComponent} from "./components/user-area-page/user-area-page.component";
import {UserAreaRoutingModule} from "./user-area-routing.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatListModule} from "@angular/material/list";
import {BooksService} from "../books/services/books-abstract.service";
import {BooksMockService} from "../books/services/books-mock.service";
import {NotificationCountPipe} from "./pipes/notification-count.pipe";

const pipes = [NotificationCountPipe];

const components = [
  UserAreaPageComponent,
  SidebarComponent
]

const modules = [
  CommonModule,
  UserAreaRoutingModule,
  MatListModule
]

const providers = [{provide: BooksService, useFactory: booksServiceFactory}];

function booksServiceFactory() {
  return new BooksMockService()
}

@NgModule({
  declarations: [...components, ...pipes],
  exports: components,
  imports: modules,
  providers: providers
})
export class UserAreaModule {
}

@NgModule({
  imports: [UserAreaModule, UserAreaRoutingModule]
})
export class UserAreaModuleWithRouting {
}
