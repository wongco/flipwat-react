import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  GET_CATEGORY_NAMES_FAIL,
  // GET_CATEGORY_DETAILS_SUCCESS,
  // GET_CATEGORY_DETAILS_FAIL,
} from './types';

import { apiCall, createGetCategoriesReqObj } from '../Helpers/apiHelper';

export function setAppToLoading() {
  return {
    type: SET_LOADING,
  };
}

export function loadCategoryNamesSuccess(categoryTitles) {
  return {
    type: GET_CATEGORY_NAMES_SUCCESS,
    payload: {
      categoryTitles,
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
    // initiate loading state
    dispatch(setAppToLoading());
    try {
      const relativePath = '/categories';
      const apiResponse = await apiCall(
        createGetCategoriesReqObj(relativePath),
      );
      const { categories } = apiResponse.data;
      const cleanCategories = categories.map(category => {
        const { id, name, createdAt, updatedAt } = category;
        return { id, name, createdAt, updatedAt };
      });
      dispatch(loadCategoryNamesSuccess(cleanCategories));
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
