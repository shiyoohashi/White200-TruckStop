import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// これは状態管理のためにredux toolkitを使って作られています。
// このファイルを理解するには以下のドキュメンテーションを読んでください。https://redux-toolkit.js.org/

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async () => {
    const { data: response } = await axios.get("/api/locations");
    return response;
  }
);

const initialState = [];

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    // ここに reducer を書いてください。slice と reducer については以下のサイトを参照してください。 https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#writing-slices
  },
  extraReducers: {
    [fetchLocations.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default locationsSlice.reducer;
