import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartObj {
    price: number;
    prodId: number;
    prodName: string;
    quantity: number;
}

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
            if (!state.value.find((item, i) => item.prodId === action.payload.prodId)) {
                state.value.push(action.payload);
            } else {
                if (state.value)
                    state.value = state.value.map((item, i) =>
                        item.prodId === action.payload.prodId
                            ? { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity }
                            : item
                    );
            }
        }
    }
});

export const { setCartItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItem = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
