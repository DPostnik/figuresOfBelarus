import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {

  @Output() onChange = new EventEmitter<string>();
  searchReq = new Subject();
  constructor() {
    this.setSubscription();
  }

  ngOnInit(): void {
  }

  private setSubscription(): void
  {
    this.searchReq.pipe(
      debounceTime(500)
    ).subscribe(
      (searchValue: string) =>
      {
        console.log(searchValue);
        this.onChange.emit(searchValue);
      }
    );
  }

  updateSearch(search: any): void {
    this.searchReq.next(search.target.value);
  }

  ngOnDestroy(): void {
    this.searchReq.unsubscribe();
  }
}
