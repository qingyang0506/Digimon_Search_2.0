import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface searchState {
    value: string,
}

// Define the initial state using that type
const initialState: searchState = {
    value: "all",
}

export const searchSlice = createSlice({
    name: 'search',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        reset: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
})

export const { reset } = searchSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearchKeyword = (state: RootState) => state.search.value

export default searchSlice.reducer