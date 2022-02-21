import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

const initialState = {
    active: 0
};

export const menuSlice = createSlice({
    initialState,
    name: 'menu',
    reducers: {
        setMenu: (state, action: PayloadAction<number>) => {
            state.active = action.payload;
        }
    }
});

export const { setMenu } = menuSlice.actions;

export const selectMenuItem = (state: RootState) => state.menu.active;

export default menuSlice.reducer;
