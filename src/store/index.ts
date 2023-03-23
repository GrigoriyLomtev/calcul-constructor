import { configureStore } from '@reduxjs/toolkit';
import calculationReducer from '../slices/calculation-slice';

export const store = configureStore({
  reducer: {
    calculation: calculationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
