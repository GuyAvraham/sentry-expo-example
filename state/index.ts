import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga";
import reducer from "./reducer";

const rootReducer = combineReducers({
  app: reducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
export type ReduxStore = ReturnType<typeof rootReducer>;
