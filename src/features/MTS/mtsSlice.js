import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createLawyer } from "./mtsAPI";

const initialState = {
  value: null,
  status: "idle",
};

export const createLawyerAsync = createAsyncThunk(
  'mts/createLawyer',
  async (lawyerData) => {
    const response = await createLawyer(lawyerData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const mtsSlice = createSlice({
  name: "mts",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(createLawyerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createLawyerAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        console.log(`lawyer is created ${state.value}`)
        alert("lawyer created")
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

export default mtsSlice.reducer;
