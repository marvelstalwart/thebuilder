import {configureStore} from "@reduxjs/toolkit"
import { api } from "./baseApi"
import userSlice from "../features/auth/user"
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    })


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch