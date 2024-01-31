import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

export const jwtStorageKey: string = 'JWT_TOKEN'

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public readonly token$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._getToken());

  public setToken(token: string): void {
    this._setToken(token);
    this.token$.next(token);
  }

  public logout(): void {
    this._clearToken();
    this.token$.next(null)
  }

  private _getToken(): string | null {
    return localStorage.getItem(jwtStorageKey);
  }

  private _setToken(token: string): void {
    localStorage.setItem(jwtStorageKey, token);
  }

  private _clearToken(): void {
    localStorage.removeItem(jwtStorageKey);
  }
}
