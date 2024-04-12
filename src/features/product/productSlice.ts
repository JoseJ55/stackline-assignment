import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface reviewStructure {
    customer: string,
    review: string,
    score: number,
}

interface salesStructure {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

interface productStructure {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: reviewStructure[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: salesStructure[],
}

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