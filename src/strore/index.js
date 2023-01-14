import { configureStore } from '@reduxjs/toolkit';
import backgroundSlice from './background';
import counterSlice from './counter';


const store = configureStore(
    {
        reducer: {
            counter: counterSlice.reducer,
            background: backgroundSlice.reducer
        }
    }
)

export default store;