import { createSlice } from "@reduxjs/toolkit";

export const markSlice = createSlice({
  name: "MarkSlice",
  initialState: {
    name: "Mark",
    phrase: [{count: -1}],
    counter: 0,
    hint: {},
  },

  reducers: {
    pullPhrase: (state, action) => {
      state.phrase.push(action.payload)
    },
    countIncrement: (state) => {
      state.phrase[0].count += 1
    }
  } 
})

export const { pullPhrase, countIncrement } = markSlice.actions
export default markSlice.reducer


