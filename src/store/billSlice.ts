import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

const initialState = {
    type: 'cart'
};

export const billSlice = createSlice({
    initialState,
    name: 'bill',
    reducers: {
        setBill: (state, action: PayloadAction<string>) => {
            state.type = action.payload;
        }
    }
});

export const { setBill } = billSlice.actions;

export const selectBillItem = (state: RootState) => state.bill.type;

export default billSlice.reducer;
