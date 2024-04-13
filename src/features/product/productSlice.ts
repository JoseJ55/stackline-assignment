import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { productStructure } from "../../models/products.interfaces";

interface ProductState {
    allProducts: productStructure[]
    currentProduct: productStructure | null,
    isLoading: boolean,
    isError: boolean
}

const initialState: ProductState = {
    allProducts: [],
    currentProduct: null,
    isLoading: true,
    isError: false,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<productStructure[]>) => {
            state.allProducts = action.payload;
            state.currentProduct = action.payload[0];
            state.isLoading = false;
            state.isError = false;
        },
        setProductsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        }
    }
})

export const { setProducts } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.allProducts;

export default productSlice.reducer;