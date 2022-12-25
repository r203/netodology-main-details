import { ofType } from "redux-observable";
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
} from 'rxjs/operators';
import {
  servicesRequest,
  servicesFailure,
  servicesSuccess,
} from '../redux/servicesSlice';


export const servicesEpic = action$ => action$.pipe(
  ofType(servicesRequest),
  switchMap(action => {
    return ajax.getJSON('http://localhost:7070/api/services').pipe(
      map((response) => servicesSuccess(response)),
      catchError(error => of(servicesFailure(error)))
    );
  })
)