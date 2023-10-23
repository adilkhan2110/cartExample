import { createSlice } from '@reduxjs/toolkit';


let data = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description for Product 1',
        price: 10.99,
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description for Product 2',
        price: 24.99,
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description for Product 3',
        price: 7.49,
    },
]

const sliceViewProduct = createSlice({
    name: 'viewProduct',
    initialState: data, // Initial state
    reducers: {
        addProdect: (state, action) => {            
            state.push(action.payload); // Add the product to the products array
        },



        // You can define other actions here
    },
});

export const { addProdect } = sliceViewProduct.actions;
export default sliceViewProduct.reducer;