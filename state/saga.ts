import { delay, takeEvery } from "@redux-saga/core/effects";

import { MAKE_ERROR_ASYNC_ACTION } from "./actions";

function* makeError() {
  console.log("make error saga");
  yield delay(2000);
  // throw Error('error from saga action');
  throw 'error from saga action';
}

export default function* rootSaga() {
  yield takeEvery(MAKE_ERROR_ASYNC_ACTION, makeError);
}
