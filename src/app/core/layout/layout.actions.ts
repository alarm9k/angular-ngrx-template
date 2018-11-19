import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  SampleAction = '[Layout] Sample action',
  AnotherAction = '[Layout] Another action'
}

export class SampleAction implements Action {
  readonly type = LayoutActionTypes.SampleAction;
}

export class AnotherAction implements Action {
  readonly type = LayoutActionTypes.AnotherAction;
}

export type LayoutActions = SampleAction | AnotherAction;
