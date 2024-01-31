import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAreaPageComponent} from "./components/user-area-page/user-area-page.component";
import {UserAreaRoutingModule} from "./user-area-routing.module";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatListModule} from "@angular/material/list";
import {BooksAbstractService} from "../books/services/books-abstract.service";
import {NotificationCountPipe} from "./pipes/notification-count.pipe";
import {BooksApiService} from "../books/services/books-api.service";
import {BooksEventService} from "../books/services/books-event.service";
import {BooksService} from "../books/services/books.service";

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

const providers = [
  {provide: BooksAbstractService, useFactory: booksServiceFactory, deps: [BooksApiService, BooksEventService]}
];

function booksServiceFactory(apiService: BooksApiService, rootService: BooksEventService) {
  return new BooksService(apiService, rootService)
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
