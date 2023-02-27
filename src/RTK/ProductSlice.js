import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload.id);
    },
    searchPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id === action.payload);

    },
    updatePost: (state, action) => {
     state.posts.map(post => {
        if(post.id == action.payload.id){
            post.title = action.payload.title
            post.body = action.payload.body
        }
     })
    },
  },
});
export default postSlice.reducer;
export const { addPost, deletePost, searchPost, updatePost } = postSlice.actions;
