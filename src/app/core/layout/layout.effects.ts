import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LayoutActionTypes} from './layout.actions';
import {tap} from 'rxjs/operators';


@Injectable()
export class LayoutEffects {
  @Effect({dispatch: false})
  sampleEffect$ = this.actions$.pipe(
    ofType(LayoutActionTypes.SampleAction),
    tap(() => console.log('Effect invoked'))
  );

  constructor(private actions$: Actions) {}
}
