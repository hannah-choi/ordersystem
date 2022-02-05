import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartObj } from '../service/cart/Cart';

import type { RootState } from './store';

// Define a type for the slice state
interface CartState {
    value: CartObj[] | [];
}

// Define the initial state using that type
const initialState: CartState = {
    value: []
};

export const cartSlice = createSlice({
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    name: 'cart',
    reducers: {
        setCartItem: (state, action: PayloadAction<CartObj>) => {
            state.value.push(action.payload);
        }
    }
});

export const { setCartItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItem = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
