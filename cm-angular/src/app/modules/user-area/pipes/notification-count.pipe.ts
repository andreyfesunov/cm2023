import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'notificationCount'
})
export class NotificationCountPipe implements PipeTransform {
  transform(count: number | null): string | null {
    if (count === null) return null;
    return count <= 99 ? count.toString() : "99+";
  }
}
