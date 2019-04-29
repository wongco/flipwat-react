import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  SET_ERROR,
  GET_CATEGORY_DETAILS_SUCCESS,
} from '../Actions/types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  categoryTitles: [],
  categoryDetails: {},
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

    case GET_CATEGORY_DETAILS_SUCCESS: {
      const { categoryDetails } = action.payload;
      const newCategoryDetails = {
        ...state.categoryDetails,
        ...categoryDetails,
      };
      const newState = {
        ...state,
        loading: false,
        error: false,
        categoryDetails: newCategoryDetails,
      };
      return newState;
    }

    case SET_ERROR: {
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
