import { configureStore } from '@reduxjs/toolkit'
// ...
import searchRudecer from "../feature/search/searchkeyword"

export const store = configureStore({
    reducer: {
        search: searchRudecer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch