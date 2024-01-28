import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'notificationCount'
})
export class NotificationCountPipe implements PipeTransform {
  transform(count: number): string {
    return count <= 99 ? count.toString() : "99+";
  }
}
