import postsService from "../Api/postsServise";
import { postsApi } from "../Api/axiosApi";

export const ADD_POST = "ADD_POST";
export const SET_IS_POST_LOADING = "SET_IS_POST_LOADING";
export const GET_POSTS = "GET_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const GET_CURRENT_POST = "GET_CURRENT_POST";
export const CHANGE_POST = "CHANGE_POST";
export const GET_COMMENTS = "GET_COMMENTS";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  posts: [],
  isPostsLoading: false,
  currentPost: {},
  totalPostCount: 0,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case SET_TOTAL_COUNT:      
      return { ...state, totalPostCount: action.payload };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case SET_IS_POST_LOADING:
      return {
        ...state,
        isPostsLoading: action.payload,
      };

    case GET_CURRENT_POST:
      return {
        ...state,
        currentPost: { ...action.payload },
      };
    case CHANGE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, title: action.payload.title };
          } else {
            return post;
          }
        }),
      };
    case GET_COMMENTS:
      return {
        ...state,
        currentPost: { ...state.currentPost, comments: [...action.payload] },
      };
    default:
      return state;
  }
};

export const getPostsAC = (payload) => ({ type: GET_POSTS, payload });
export const addPostAC = (payload) => ({ type: ADD_POST, payload });
export const setTotalCountAC = (payload) => ({
  type: SET_TOTAL_COUNT,
  payload,
});
export const removePostAC = (payload) => ({ type: REMOVE_POST, payload });
export const setIsPostLoadingAC = (payload) => ({
  type: SET_IS_POST_LOADING,
  payload,
});
export const updatePostAC = (payload) => ({ type: CHANGE_POST, payload });
export const getCommentsByPostIdAC = (payload) => ({
  type: GET_COMMENTS,
  payload,
});

export const fetchPosts = (params) => (dispatch) => { 
  dispatch(setIsPostLoadingAC(true));
  postsService.getAllPosts(params).then((data) => {
    dispatch(getPostsAC(data.data));    
    dispatch(setTotalCountAC(Number(data.headers["x-total-count"])));
    dispatch(setIsPostLoadingAC(false));
  });
};

export const addNewPostThunk = (post) => (dispatch) => {
  postsApi.addPost(post).then((res) => {
    dispatch(addPostAC(res.data.post));
  });
};

export const removePostThunk = (id) => (dispatch) => {
  postsApi.removePost(id).then((res) => {
    console.log(res);
    dispatch(removePostAC(id));
  });
};
export const updatePostThunk = (id, post) => (dispatch) => {
  postsApi.updatePost(id, post).then((res) => {
    dispatch(updatePostAC(res.data.post));
  });
};

export const getComments = (id) => (dispatch) => {
  postsApi.getComments(id).then((res) => {
    dispatch(getCommentsByPostIdAC(res.data));
  });
};
