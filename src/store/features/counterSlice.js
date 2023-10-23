import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: [], // Initial state
    reducers: {
        addProdectCart: (state, action) => {            
            state.push(action.payload); // Add the product to the products array
        },
        


        // You can define other actions here
    },
});

export const { addProdectCart } = counterSlice.actions;
export default counterSlice.reducer;