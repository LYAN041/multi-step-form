import { configureStore } from '@reduxjs/toolkit';
import planReducer from './redux/plan-slice/planSlice';
import addOnsReducer from './redux/add-ons-slice/addOnsSlice';
import counterReducer from './redux/counter-slice/counterSlice';

export default configureStore({
  reducer: {
    plan: planReducer,
    addOns: addOnsReducer,
    counter: counterReducer,
  },
})