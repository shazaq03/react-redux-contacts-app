import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../StoreandSlices/ContactSlice';
import { useNavigate } from 'react-router-dom';

function AddPage() {

    
    const [nameState, setnameState] = useState("");
    const [emailState, setemailState] = useState("");
    const [phoneState, setphoneState] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    function handleSubmit(e){
        e.preventDefault();
        if(nameState === ""){return;}
        dispatch(addContact({name: nameState.toString(), email: emailState.toString(), phoneNumber: phoneState}));
        setemailState("");
        setnameState("");
        setphoneState("");
        navigate("/");
    }

  return (
    <div className="form-container">
        <form id="#only-form" onSubmit={(e) => {handleSubmit(e)}}>
            <div className="input-group">
                <label htmlFor="Name">Name</label>
                <input 
                    name="Name" 
                    id="Name" 
                    type="text" 
                    autoComplete="off" 
                    autoFocus
                    value={nameState}
                    onChange={(e) => setnameState(e.target.value)}
                    />
            </div>
            <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input 
                    name="Email" 
                    id="Email" 
                    type="email" 
                    autoComplete="off"
                    value={emailState}
                    onChange={(e) => setemailState(e.target.value)}
                    />
            </div>
            <div className="input-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    name="phoneNumber" 
                    id="phoneNumber" 
                    type="number" 
                    step="0.01" 
                    autoComplete="off"
                    value={phoneState}
                    onChange={(e) => setphoneState(e.target.value)}
                    />
            </div>
            <button className="btn" type="submit">Save</button>
        </form>
    </div>
  )
}

export default AddPage;