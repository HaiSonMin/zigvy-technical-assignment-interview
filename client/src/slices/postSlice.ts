import { IPost } from '@/interfaces/models';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  keySearch: string;
  posts: Array<IPost>;
  page: number;
}

const initialState: IInitialState = {
  posts: [],
  keySearch: '',
  page: 1,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action: { payload: Array<IPost> }) {
      state.posts = [...state.posts, ...action.payload];
    },
    setSearchPosts(state, action: { payload: string }) {
      state.posts = [];
      state.page = 1;
      state.keySearch = action.payload;
    },
    setNextPage(state) {
      state.page += 1;
    },
  },
});

export default postSlice.reducer;

export const { addPost, setSearchPosts, setNextPage } = postSlice.actions;

export const getPosts = (state: { post: IInitialState }) => state.post.posts;
export const getPagePosts = (state: { post: IInitialState }) => state.post.page;
export const getSearchPosts = (state: { post: IInitialState }) =>
  state.post.keySearch;
