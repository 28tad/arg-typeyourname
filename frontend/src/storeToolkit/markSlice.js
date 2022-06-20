import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mark",
    phrase: [{count: 1}],
    hint: {},
}

export const fetchPhrases = createAsyncThunk('Mark/fetchPhrases', async () => {
  const respone = await fetch(`http://localhost:4000/lines/${id}`, {
    method: 'GET',
    credentials: 'include',
    headers: {"Content-Type": "application/json"}
  })
})

export const markSlice = createSlice({
  name: "MarkSlice",
  initialState: initialState, 

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


