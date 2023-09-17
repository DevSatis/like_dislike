import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    liked: [],
    disliked: [],
  },
  reducers: {
    setLikedCards: (state, action) => {
      state.liked = action.payload;
    },
    setDislikedCards: (state, action) => {
      state.disliked = action.payload;
    },
    likeCard: (state, action) => {
      state.liked.push(action.payload);
    },
    dislikeCard: (state, action) => {
      state.disliked.push(action.payload);
    },
  },
});

export const { setLikedCards, setDislikedCards, likeCard, dislikeCard } = cardSlice.actions;

export default cardSlice.reducer;
