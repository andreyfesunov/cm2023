import {Component, OnDestroy, OnInit} from "@angular/core";
import {BehaviorSubject, Subscription} from "rxjs";

export interface INavItem {
  id: number,
  title: string,
  link: string,
  icon: string | null,
  notificationsCount: number | null
}

@Component({
  selector: "app-sidebar",
  templateUrl: "sidebar.component.html",
  styleUrls: ["sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, OnDestroy {
  private readonly _subscription: Subscription = new Subscription();
  public activeNav$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  public navLinks: INavItem[] = [
    {
      id: 0,
      title: "Home",
      link: "#",
      icon: "home",
      notificationsCount: null
    },
    {
      id: 1,
      title: "Settings",
      link: "#",
      icon: "settings",
      notificationsCount: 32
    },
    {
      id: 2,
      title: "Gallery",
      link: "#",
      icon: "gallery_thumbnail",
      notificationsCount: 101
    }
  ];

  public ngOnInit(): void {
    this._subscription.add(
      this.activeNav$.subscribe((v) => console.log(v))
    );
  }

  public ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  public onClick(id: number): void {
    this.activeNav$.next(id);
  }
}
