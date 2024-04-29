import { createSlice} from "@reduxjs/toolkit";

interface UiState {
    isSideBarOpen: boolean
}

const initialState : UiState = {
    isSideBarOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSideBar(state) {
            state.isSideBarOpen = !state.isSideBarOpen
        }
    }
})

export const { toggleSideBar } = uiSlice.actions
export default uiSlice.reducer