import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import sectionReducer from '../features/sec/sectionSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    sec: sectionReducer
  },
});
