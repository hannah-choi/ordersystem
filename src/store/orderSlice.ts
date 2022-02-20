import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OrderObj {
    orderDate: string;
    orderNumber: string;
    orderedItem: CartObj[];
    orderTotal: number;
}

import { CartObj } from './cartSlice';

import type { RootState } from './store';

// Define a type for the slice state
interface OrderState {
    value: OrderObj[] | [];
}

// Define the initial state using that type
const initialState: OrderState = {
    value: []
};

export const orderSlice = createSlice({
    initialState,

    name: 'order',
    reducers: {
        setOrder: (state, action: PayloadAction<OrderObj>) => {
            state.value.push({
                orderDate: action.payload.orderDate,
                orderNumber: action.payload.orderNumber,
                orderTotal: action.payload.orderTotal,
                orderedItem: action.payload.orderedItem
            });
        }
    }
});

export const { setOrder } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectOrderItem = (state: RootState) => state.order.value;

export default orderSlice.reducer;
