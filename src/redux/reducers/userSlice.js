import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  nombre: null,
  numero: null,
};

export const slice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    enviarUsuario: (state, action) => {
      state.nombre = action.payload;
    },
    enviarTelefono: (state, action) => {
      state.numero = action.payload;
    },
  },
});

export const {enviarUsuario, enviarTelefono} = slice.actions;
export const selectUsuario = state => state.usuario.nombre;
export const selectTelefono = state => state.usuario.numero;
export default slice.reducer;
