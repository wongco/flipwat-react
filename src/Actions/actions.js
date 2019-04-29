import {
  SET_LOADING,
  GET_CATEGORY_NAMES_SUCCESS,
  SET_ERROR,
  GET_CATEGORY_DETAILS_SUCCESS,
} from './types';

import { apiCall, createGetReqObj } from '../Helpers/apiHelper';

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

export function loadCategoryDetailsSuccess(categoryDetails) {
  return {
    type: GET_CATEGORY_DETAILS_SUCCESS,
    payload: {
      categoryDetails,
    },
  };
}

export function setAppToError(error) {
  return {
    type: SET_ERROR,
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
      const apiResponse = await apiCall(createGetReqObj(relativePath));
      const { categories } = apiResponse.data;
      const cleanCategories = categories.map(category => {
        const { id, name, createdAt, updatedAt } = category;
        return { id, name, createdAt, updatedAt };
      });
      dispatch(loadCategoryNamesSuccess(cleanCategories));
    } catch (error) {
      dispatch(setAppToError(error));
    }
  };
}

// thunk to retreive specific category details
export function loadCategoryDetails(categoryId) {
  return async function(dispatch) {
    // initiate loading state
    dispatch(setAppToLoading());
    try {
      const relativePath = `/categories/${categoryId}`;
      const apiResponse = await apiCall(createGetReqObj(relativePath));
      const { category } = apiResponse.data;
      const { id, name, cards, createdAt, updatedAt } = category;
      const categoryDetails = {
        [id]: {
          name,
          cards,
          createdAt,
          updatedAt,
        },
      };
      dispatch(loadCategoryDetailsSuccess(categoryDetails));
    } catch (error) {
      dispatch(setAppToError(error));
    }
  };
}
