import { createSlice } from "@reduxjs/toolkit";


const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        background: 'blue'
    },
    reducers: {
        changeBackground(state, payload) {
            state.background = payload.payload
        }
    }
})

export const backgroundAction = backgroundSlice.actions

export default backgroundSlice;