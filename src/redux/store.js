import {configureStore} from '@reduxjs/toolkit';
import usuarioReducer from '../redux/reducers/userSlice';
export const store = configureStore({
  reducer: {
    usuario: usuarioReducer,
  },
});
