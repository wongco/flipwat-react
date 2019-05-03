import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  SET_ERROR,
  GET_CATEGORY_DETAILS_SUCCESS,
  SET_QUESTION,
  CLEAR_QUESTION,
} from '../Actions/types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  categoryTitles: [],
  categoryDetails: {},
  currentQuestion: {
    categoryId: '',
    cardIdx: -1,
  },
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

    case SET_QUESTION: {
      const { categoryId, cardIdx } = action.payload;
      const newState = {
        ...state,
        currentQuestion: {
          categoryId,
          cardIdx,
        },
      };
      return newState;
    }

    case CLEAR_QUESTION: {
      const newState = {
        ...state,
        currentQuestion: {
          categoryId: '',
          cardIdx: -1,
        },
      };
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
