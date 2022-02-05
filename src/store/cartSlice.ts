import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartObj } from './cartSlice';

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
        deleteCartItem: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter((item) => action.payload !== item.prodId);
        },
        setCartItem: (state, action: PayloadAction<CartObj>) => {
            if (!state.value.find((item) => item.prodId === action.payload.prodId)) {
                state.value.push(action.payload);
            } else {
                if (state.value)
                    state.value = state.value.map((item) =>
                        item.prodId === action.payload.prodId
                            ? { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity }
                            : item
                    );
            }
        }
    }
});

export const { deleteCartItem, setCartItem } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCartItem = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
