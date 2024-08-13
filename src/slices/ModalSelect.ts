import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalState } from '../types';

const initialState: modalState = {
  type: ''
};

const ModalSelect = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    btnClick: (state, action: PayloadAction<string>) => {        
        state.type = action.payload;
    },
  },
});

export const { btnClick } = ModalSelect.actions;
export default ModalSelect.reducer;