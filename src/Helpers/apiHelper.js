import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT_IN_MS } from '../config';

/**
 * @description shape base apiCall request data for any api request
 * @return { object} request object
 */
export function baseApiRequestData(relativePath) {
  return {
    url: `${API_BASE_URL}${relativePath}`,
    timeout: API_TIMEOUT_IN_MS,
  };
}

/**
 * @description shape apiCall request data for getting categories
 * @return { object} GET request object
 */
export function createGetCategoriesReqObj(relativePath) {
  return {
    method: 'get',
    ...baseApiRequestData(relativePath),
  };
}

/**
 * @description makes api call with provided requestObj
 * @param { object } requestData - API request data incl. method and body/query
 * @return { Promsie <apiResponse> } - Promise of API Response
 */
export function apiCall(requestObj) {
  return axios(requestObj);
}
