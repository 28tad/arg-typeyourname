import { createSlice } from "@reduxjs/toolkit";

export const markSlice = createSlice({
  name: "MarkSlice",
  initialState: {
    name: "Mark",
    phrase: '',
    hint: {},
  },

  reducers: {
    pullPhrase: (state, action) => {
      state.phrase = action.payload
    }
  } 
})

export const {pullPhrase} = markSlice.actions
export default markSlice.reducer


