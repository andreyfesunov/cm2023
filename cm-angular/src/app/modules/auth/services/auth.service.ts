import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  public readonly authorized$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
