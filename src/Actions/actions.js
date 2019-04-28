import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  GET_CATEGORY_NAMES_FAIL,
  GET_CATEGORY_DETAILS_SUCCESS,
  GET_CATEGORY_DETAILS_FAIL,
} from './types';

export function setAppToLoading() {
  return {
    type: SET_LOADING,
  };
}

export function loadCategoryNamesSuccess(categories) {
  return {
    type: GET_CATEGORY_NAMES_SUCCESS,
    payload: {
      categories,
    },
  };
}

export function loadCategoryNamesFail(error) {
  return {
    type: GET_CATEGORY_NAMES_FAIL,
    payload: {
      error,
    },
  };
}

// thunk to retreive all category names
export function loadCategoryNames() {
  return async function(dispatch) {
    dispatch(setAppToLoading());
    try {
      // dispatch after success - replace test with axios request
      const categories = [
        {
          id: 'test123',
          name: 'catOne',
        },
        {
          id: 'test234',
          name: 'catTwo',
        },
      ];
      dispatch(loadCategoryNamesSuccess(categories));
    } catch (error) {
      dispatch(loadCategoryNamesFail(error));
    }
  };
}

// thunk to retreive specific category details
export function loadCategoryDetails(id) {
  return async function(dispatch) {
    dispatch(setAppToLoading());
    try {
      // dispatch after success
    } catch (error) {
      // dispatch error if errror occured
    }
  };
}
