import {
  COUNT_UP,
  COUNT_DOWN,
} from './actions';

const initialState = {
  count: 0,
};

export default function counterReducer(state = initialState, action = {}) {
  const reducers = {
    [COUNT_UP]: () => {
      const count = state.count + 1;
      return {
        ...state,
        count,
      };
    },
    [COUNT_DOWN]: () => {
      const count = state.count - 1;
      return {
        ...state,
        count,
      };
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
}
