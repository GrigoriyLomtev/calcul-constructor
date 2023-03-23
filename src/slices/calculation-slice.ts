import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Operation {
  Division = 'Division',
  Multiplication = 'Multiplication',
  Subtraction = 'Subtraction',
  Addition = 'Addition',
}

const initialState = {
  currentOperation: Operation.Division,
  firstValue: '0',
  secondValue: '0',
  fraction: false,
};

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    setCurrentOperation: (state, action: PayloadAction<Operation>) => {
      state.currentOperation = action.payload;
    },
    setFirstValue: (state, action: PayloadAction<string>) => {
      state.firstValue = action.payload;
    },
    setSecondValue: (state, action: PayloadAction<string>) => {
      state.secondValue = action.payload;
    },
    setFraction: (state, action: PayloadAction<boolean>) => {
      state.fraction = action.payload;
    },
  },
});

export const { setCurrentOperation, setFirstValue, setSecondValue, setFraction } = calculationSlice.actions;

export default calculationSlice.reducer;
