import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ChosenModal {
    profile = 'profile modal'
}

export const modalsSlice = createSlice({
    name: 'modals',
    initialState: null,
    reducers: {
        chosenModal: (state, action: PayloadAction<ChosenModal>) => {
            document.body.style.overflowY = 'hidden';
            return state = action.payload;
        },
        clearAllModals: (state) => {
            document.body.style.overflowY = '';
            return state = null;
        }
    }
})

export const { chosenModal, clearAllModals } = modalsSlice.actions

export default modalsSlice.reducer