import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mark",
    phrase: [{count: 1}],
    hint: {},
}

export const fetchPhrases = createAsyncThunk('Mark/fetchPhrases', async (id) => {
  const respone = await fetch(`http://localhost:4000/`, {
    method: 'GET',
    headers: {"Content-Type": "application/json"},
    credentials: 'include',
  })

  const data = await respone.json();
  return data
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
  },
  extraReducers(builder) {
    builder.addCase(fetchPhrases.fulfilled, (state, action) => {
      state.phrase.push(action.payload)
    })
  }
})

export const { pullPhrase, countIncrement } = markSlice.actions
export default markSlice.reducer


