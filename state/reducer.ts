import { MAKE_ERROR_ASYNC_ACTION } from "./actions";

const initialState = {
  error: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case MAKE_ERROR_ASYNC_ACTION:
      return state;
    default:
      return initialState;
  }
};

export default reducer;
