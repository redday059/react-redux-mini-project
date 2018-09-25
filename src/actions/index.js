import axios from 'axios';

const API_KEY = '?key=nate069';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';

export const FETCH_POSTS_DATA = 'FETCH_POSTS_DATA';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_TAG = 'ADD_TAG';
export const PER_PAGE = 'PER_PAGE';

const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS_DATA,
    payload: request,
  };
};

export { fetchPosts };

export function fetchTags() {
  return fetchPosts();
}

export function addTag(tag) {
  return {
    type: ADD_TAG,
    payload: tag,
  };
}

export function setNumberPerPage(number) {
  return {
    type: PER_PAGE,
    payload: number,
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}

export function deletePost(id, callback) {
// eslint-disable-next-line no-unused-vars
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id,
  };
}
