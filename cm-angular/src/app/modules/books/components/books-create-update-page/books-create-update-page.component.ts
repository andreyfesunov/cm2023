import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, map, Observable, Subscription, switchMap} from "rxjs";
import {IBook, ICreateBookRequest, IUpdateBookRequest} from "../../interfaces/books";
import {BooksService} from "../../services/books-abstract.service";
import {RouterService} from "../../../../router.service";

export interface IBooksCreateUpdateFormGroup {
  id: FormControl<number | null>;
  title: FormControl<string | null>;
  authorFirstName: FormControl<string | null>;
  authorLastName: FormControl<string | null>;
}

@Component({
  selector: 'app-books-create-update-page',
  templateUrl: 'books-create-update-page.component.html',
  styleUrls: ['books-create-update-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BooksCreateUpdatePageComponent implements OnDestroy, OnInit {
  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _booksService: BooksService,
    private readonly _routerService: RouterService
  ) {
    this.book$ = this._activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        filter((v): v is string => v !== null),
        switchMap((id) => this._booksService.getById(Number(id)))
      )
  }

  public ngOnInit(): void {
    this._subscription.add(
      this.book$.subscribe((book) => {
        this.formGroup.controls.title.setValue(book.title);
        this.formGroup.controls.authorFirstName.setValue(book.author.firstName);
        this.formGroup.controls.authorLastName.setValue(book.author.lastName);
        this.formGroup.controls.id.setValue(book.id);
      })
    );
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  protected readonly book$: Observable<IBook>;
  protected readonly formGroup: FormGroup<IBooksCreateUpdateFormGroup> = new FormGroup<IBooksCreateUpdateFormGroup>({
    id: new FormControl<number | null>(null),
    title: new FormControl<string | null>(null, [Validators.required]),
    authorFirstName: new FormControl<string | null>(null, [Validators.required]),
    authorLastName: new FormControl<string | null>(null, [Validators.required]),
  });
  private readonly _subscription: Subscription = new Subscription();

  protected onSave(): void {
    if (this.formGroup.valid) {
      let request$: Observable<number>;

      if (this.isEdit()) {
        const dto: IUpdateBookRequest = {
          id: this.formGroup.controls.id.value!,
          title: this.formGroup.controls.title.value!,
          author: {
            firstName: this.formGroup.controls.authorFirstName.value!,
            lastName: this.formGroup.controls.authorLastName.value!
          }
        }

        request$ = this._booksService.update(dto);
      } else {
        const dto: ICreateBookRequest = {
          title: this.formGroup.controls.title.value!,
          author: {
            firstName: this.formGroup.controls.authorFirstName.value!,
            lastName: this.formGroup.controls.authorLastName.value!
          }
        }

        request$ = this._booksService.create(dto);
      }

      this._subscription.add(
        request$.subscribe(() => this._routerService.toAllBooks())
      );
    }
  }

  protected isEdit(): boolean {
    return this.formGroup.controls.id.value !== null;
  }
}
