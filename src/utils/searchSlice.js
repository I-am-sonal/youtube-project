import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //result => { "ip": ['iphone', "iphone14"]}
      //state = { ...action.payload, ...state }; not working
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
