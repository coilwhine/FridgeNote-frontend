import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ChosenModal {
    profile = 'profile modal',
    none = null
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState: null,
    reducers: {
        chosenModal: (state, action: PayloadAction<ChosenModal>) => {
            return state = action.payload;
        },
        clearAllModals: (state) => {
            return state = null;
        }
    }
})

export const { chosenModal, clearAllModals } = modalsSlice.actions

export default modalsSlice.reducer