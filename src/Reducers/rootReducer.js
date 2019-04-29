import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  GET_CATEGORY_NAMES_FAIL,
  // GET_CATEGORY_DETAILS_SUCCESS,
  // GET_CATEGORY_DETAILS_FAIL,
} from '../Actions/types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  categoryTitles: [],
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOADING: {
      const newState = { ...state, loading: true, error: false };
      return newState;
    }

    case GET_CATEGORY_NAMES_SUCCESS: {
      const { categoryTitles } = action.payload;
      const newState = {
        ...state,
        loading: false,
        error: false,
        categoryTitles,
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

    default: {
      return state;
    }
  }
}

export default rootReducer;
