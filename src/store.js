import { configureStore, createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    email: '',
    address: '',
    city: '',
  },
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => ({
      name: '',
      email: '',
      address: '',
      city: '',
    }),
  },
});

export const { updateForm, resetForm } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export default store;
