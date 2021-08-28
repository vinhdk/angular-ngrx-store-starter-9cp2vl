import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { SumAction, ClearAction } from './actions';
import { AppState } from './reducers';
import { getTotal } from './selectors';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public readonly destroy$ = new Subject();

  public readonly sum$ = this.store.select(getTotal).pipe(
    map(v => (v ? v : '')),
    takeUntil(this.destroy$)
  );

  public a: number;
  public b: number;

  constructor(protected readonly store: Store<AppState>) {}

  public calc(): void {
    if (this.a || this.b) {
      this.store.dispatch(
        SumAction({ a: this.a ? this.a : 0, b: this.b ? this.b : 0 })
      );
    } else {
      this.store.dispatch(ClearAction());
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
