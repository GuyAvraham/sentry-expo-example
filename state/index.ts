import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import * as Sentry from "sentry-expo";

import rootSaga from "./saga";
import reducer from "./reducer";

const rootReducer = combineReducers({
  app: reducer,
});

const sagaMiddleware = createSagaMiddleware({
  onError: (error: Error, { sagaStack }) => {
    console.error("*** error from middleware", error);
    Sentry.captureException(error, { extra: { sagaStack } });
  },
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
export type ReduxStore = ReturnType<typeof rootReducer>;
