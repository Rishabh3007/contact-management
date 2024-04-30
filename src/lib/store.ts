import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import contactReducer from "./features/contact/contactSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            ui: uiReducer,
            contact: contactReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']