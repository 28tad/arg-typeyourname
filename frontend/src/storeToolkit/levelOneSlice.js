import { createSlice } from "@reduxjs/toolkit";

export const levelOneSlice = createSlice({
  name: "levelOneSlice",
  initialState: {
    phrase: '',
    hint: {},
  },

  reducers: {
    pullPhrase: (state, action) => {
      state.phrase = action.payload
    }
  } 
})

export const {pullPhrase} = levelOneSlice.actions
export default levelOneSlice.reducer
