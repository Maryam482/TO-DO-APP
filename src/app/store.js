import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todolist/todoSlicer';

export default  configureStore({
  reducer: {
    todo: todoReducer,
  },
});
