import { Component } from "@angular/core";

export interface INavItem {
  title: string,
  link: string,
}

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.scss"]
})
export class SidebarComponent {
  public navLinks: INavItem[] = [
    {
      title: "Main",
      link: "#",
    },
    {
      title: "Settings",
      link: "#",
    },
    {
      title: "Gallery",
      link: "#",
    }
  ]
}
