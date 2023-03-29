import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Operation {
  Division = 'Division',
  Multiplication = 'Multiplication',
  Subtraction = 'Subtraction',
  Addition = 'Addition',
}

const initialState = {
  currentOperation: Operation.Addition,
  mainValue: '0',
  localValue: '0',
  isNewValue: false,
  isDivideByZero: false,
};

export const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    setCurrentOperation: (state, action: PayloadAction<Operation>) => {
      state.currentOperation = action.payload;
      state.localValue = '0';
      state.isNewValue = true;
    },
    setMainValue: (state, action: PayloadAction<string>) => {
      state.mainValue === '0' ? (state.mainValue = action.payload) : (state.mainValue += action.payload);
    },
    setLocalValue: (state, action: PayloadAction<string>) => {
      state.localValue === '0' ? (state.localValue = action.payload) : (state.localValue += action.payload);
    },
    setIsNewValue: (state, action: PayloadAction<boolean>) => {
      state.isNewValue = action.payload;
    },
    setIsDivideByZero: (state, action: PayloadAction<boolean>) => {
      state.isDivideByZero = action.payload;
    },
    isEqualOperation: (state, action: PayloadAction<string>) => {
      state.mainValue = action.payload;
    },
  },
});

export const { setCurrentOperation, setMainValue, setLocalValue, setIsNewValue, setIsDivideByZero, isEqualOperation } =
  calculationSlice.actions;

export default calculationSlice.reducer;
