import axios from 'axios';
export const GET_BLOGS_REQUEST = 'GET_BLOGS_REQUEST';
export const GET_BLOGS_SUCCESS = 'GET_BLOGS_SUCCESS';
export const GET_BLOGS_FAIL = 'GET_BLOGS_FAIL';

export const GET_BLOGS_DETAILS_REQUEST = 'GET_BLOGS_DETAILS_REQUEST';
export const GET_BLOGS_DETAILS_SUCCESS = 'GET_BLOGS_DETAILS_SUCCESS';
export const GET_BLOGS_DETAILS_FAIL = 'GET_BLOGS_DETAILS_FAIL';
export const GET_BLOGS_DETAILS_RESET = 'GET_BLOGS_DETAILS_RESET';

export const GET_BLOGS_RELATED_REQUEST = 'GET_BLOGS_RELATED_REQUEST';
export const GET_BLOGS_RELATED_SUCCESS = 'GET_BLOGS_RELATED_SUCCESS';
export const GET_BLOGS_RELATED_FAIL = 'GET_BLOGS_RELATED_FAIL';

export const getArticles = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_REQUEST });
    const { data } = await axios.get(`http://localhost:3001/blogs`);
    dispatch({
      type: GET_BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOGS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getArticleDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_DETAILS_REQUEST });
    const { data } = await axios.get(`http://localhost:3001/blogs/${id}`);
    dispatch({
      type: GET_BLOGS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOGS_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const removeBlogsDetails = () => (dispatch) => {
  dispatch({
    type: GET_BLOGS_DETAILS_RESET,
  });
};

export const getArtikelRelated = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BLOGS_RELATED_REQUEST,
    });
    const { data } = await axios.get(`http://localhost:3001/blogs?_limit=3`);
    dispatch({
      type: GET_BLOGS_RELATED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOGS_RELATED_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
