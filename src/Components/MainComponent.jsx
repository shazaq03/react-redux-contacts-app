import React, { useState } from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {HiMinus, HiPlus, HiTrash} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../StoreandSlices/ContactSlice';


// const DATA = [
//     {
//         index: 1,
//         name: "person 1",
//         email: "person@person.com",
//         phone: "123456789"
//     },
//     {
//         index: 2,
//         name: "person 2",
//         email: "person@person.com",
//         phone: "123456789"
//     },
//     {
//         index: 3,
//         name: "person 3",
//         email: "person@person.com",
//         phone: "123456789"
//     },
//     {
//         index: 4,
//         name: "person 4",
//         email: "person@person.com",
//         phone: "123456789"
//     },
//     {
//         index: 5,
//         name: "person 5",
//         email: "person@person.com",
//         phone: "123456789"
//     },
//     // {
//     //     index: 6,
//     //     name: "person 6",
//     //     email: "person@person.com",
//     //     phone: "123456789"
//     // },
//     // {
//     //     index: 7,
//     //     name: "person 7",
//     //     email: "person@person.com",
//     //     phone: "123456789"
//     // },
    
//     // {
//     //     index: 8,
//     //     name: "person 8",
//     //     email: "person@person.com",
//     //     phone: "123456789"
//     // },
    
//     // {
//     //     index: 9,
//     //     name: "person 9",
//     //     email: "person@person.com",
//     //     phone: "123456789"
//     // },
    
    
// ];

function MainComponent() {

    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [toggle, settoggle] = useState(null);
    function handleToggle(i){
        if(toggle === i){
            settoggle(null);
        }else{
            settoggle(i);
        }
    }

    function handleEdit(id){
        navigate("/editcontact/" + id);
    }

    function handleDelete(id){
        dispatch(deleteContact({id: id}));
    }

  return (
    <div className='main-component'>
        <div className="inner-container">
            <Link to='/addcontact' className='add-btn'><HiPlus/> <span>Add new contact</span> </Link>

        {
            contacts && contacts.map((singleContact, index) => {
                return(
                    <div className="contact-card"  key={singleContact.id}>
                        <div className="contact-name" >
                            <h2 onClick={() => {handleToggle(singleContact.id)}}>{singleContact.name}</h2>
                            <div className="title-controls">
                                <button onClick={() =>handleEdit(singleContact.id)}> <AiOutlineEdit/> </button>
                                <button onClick={() => handleDelete(singleContact.id)}> <HiTrash/> </button>
                                <span>{toggle === singleContact.id ? <HiMinus/> : <HiPlus/> }</span>
                            </div>
                        </div>
                        <div className={toggle === singleContact.id ? "contact-details show" : "contact-details"}>
                            <p className='contact-email'> <span>Email:</span> {singleContact.email}</p>
                            <p className='contact-phone'> <span>Ph:</span> {singleContact.phoneNumber}</p>
                        </div>
                    </div>
                );
            })
        }
        </div>
    </div>
  )
}

export default MainComponent;