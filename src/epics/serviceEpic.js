import { ofType } from "redux-observable";
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  catchError,
} from 'rxjs/operators';
import {
  serviceRequest,
  serviceFailure,
  serviceSuccess,
} from '../redux/serviceSlice';



export const serviceEpic = action$ => action$.pipe(
  ofType(serviceRequest),
  switchMap(action => {
    return ajax.getJSON(`http://localhost:7070/api/services/${action.payload}`).pipe(
      map((response) => serviceSuccess(response)),
      catchError(error => of(serviceFailure(error)))
    );
  })
)