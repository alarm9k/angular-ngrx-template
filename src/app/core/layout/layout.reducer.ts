import { Action } from '@ngrx/store';
import {LayoutActionTypes} from './layout.actions';


export interface LayoutState {
  sampleParameter: number;
}

export const initialState: LayoutState = {
  sampleParameter: 0
};

export function layoutReducer(state = initialState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.SampleAction:
      return {
        ...state,
        sampleParameter: 1
      };

    case LayoutActionTypes.AnotherAction:
      return {
        ...state,
        sampleParameter: 2
      };

    default:
      return state;
  }
}
