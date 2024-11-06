import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

interface userState {
    token: string | null
}

const initialState = {
    token: null
} satisfies userState as userState

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        saveToken(state, action: PayloadAction<string>){
                state.token = action.payload
        }
    }
})

export const {saveToken} = userSlice.actions
export default userSlice.reducer