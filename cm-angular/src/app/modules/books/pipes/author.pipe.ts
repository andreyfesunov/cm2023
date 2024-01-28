import {Pipe, PipeTransform} from "@angular/core";
import {IAuthor} from "../interfaces/books";

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {
  transform(author: IAuthor): string {
    return `${author.firstName[0]}. ${author.lastName}`;
  }
}
