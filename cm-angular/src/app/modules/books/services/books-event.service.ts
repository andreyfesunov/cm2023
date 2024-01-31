import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

export enum BooksEventEnum {
  Created = 'created',
  Updated = 'updated',
  Cleared = 'cleared',
  Deleted = 'deleted'
}

export interface IBooksEvent {
  type: BooksEventEnum
}

@Injectable({
  providedIn: 'root'
})
export class BooksEventService {
  public readonly event$: Subject<IBooksEvent> = new Subject<IBooksEvent>();
}
