import { createSlice} from "@reduxjs/toolkit";

interface Contact {
    id: string; // Unique identifier for each contact
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
  }

interface ContactState {
    contacts: Contact[]
}

const initialState : ContactState = {
    contacts: []
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        updateContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id)
            state.contacts[index] = action.payload
        }
    }
})

export const { addContact, deleteContact, updateContact } = contactSlice.actions
export default contactSlice.reducer