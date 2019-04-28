import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  GET_CATEGORY_NAMES_FAIL,
  GET_CATEGORY_DETAILS_SUCCESS,
  GET_CATEGORY_DETAILS_FAIL,
} from '../Actions/types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  categories: [],
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADING: {
      const newState = { ...state, loading: true, error: false };
      return newState;
    }

    case GET_CATEGORY_NAMES_SUCCESS: {
      const { categories } = action.payload;
      const newState = {
        ...state,
        loading: false,
        error: false,
        categories,
      };
      return newState;
    }

    case GET_CATEGORY_NAMES_FAIL: {
      const { error } = action.payload;
      const newState = {
        ...state,
        loading: false,
        error,
      };
      return newState;
    }
  }

  return state;
}

export default rootReducer;
