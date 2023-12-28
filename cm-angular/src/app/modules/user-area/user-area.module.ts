import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAreaPageComponent } from "./pages/user-area-page/user-area-page.component";
import { UserAreaRoutingModule } from "./user-area-routing.module";
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { MatListModule } from "@angular/material/list";

const components = [
  UserAreaPageComponent,
  SidebarComponent
]

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    UserAreaRoutingModule,
    MatListModule
  ]
})
export class UserAreaModule { }
