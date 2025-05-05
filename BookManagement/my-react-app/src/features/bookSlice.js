import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query) => {
    let response = await axios.get(
      `https://openlibrary.org/search.json?q=${query}`
    );
    console.log("Fetched Books Data:", response.data.docs);
    return response.data.docs;
  }
);
const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    selectedBook: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setSelectedBook } = bookSlice.actions;
export default bookSlice.reducer;
