import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './servicesSlice'
import serviceReducer from './serviceSlice'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
// import { changeSearchEpic } from '../epics/changeSearchEpic';
import { servicesEpic } from '../epics/servicesEpic';
import { serviceEpic } from '../epics/serviceEpic';


const epicMiddleware = createEpicMiddleware();
const epic = combineEpics(
  servicesEpic,
  serviceEpic
)

export const store = configureStore({
  reducer: {
    services: servicesReducer,
    service: serviceReducer,
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);
export default store;