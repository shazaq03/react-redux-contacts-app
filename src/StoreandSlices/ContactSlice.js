import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


const initialState = {
    contacts:[],
}

export const ContactSlice = createSlice({

    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) =>{
            state.contacts.push({
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
            })
        },
        deleteContact: (state, action) =>{    
            state.contacts.map((contact,index) =>{
                if(contact.id === action.payload.id){
                    state.contacts.splice(index, 1);
                }
            })
            
        },
        editContact: (state, action) =>{

            let i = state.contacts.map((contact, index) =>{
                if(contact.id === action.payload.edit.id){
                    return index
                }
            })
            console.log(i[0]);
            console.log(state.contacts[i[0]].id);
            state.contacts[i[0]] = action.payload.edit;

        }
        
    }

});


export const {addContact, deleteContact , editContact} = ContactSlice.actions;

export default ContactSlice.reducer;