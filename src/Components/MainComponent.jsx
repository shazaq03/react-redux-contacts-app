import React, { useState } from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {HiMinus, HiPlus, HiTrash} from 'react-icons/hi'
import { Link } from 'react-router-dom';


const DATA = [
    {
        index: 1,
        name: "person 1",
        email: "person@person.com",
        phone: "123456789"
    },
    {
        index: 2,
        name: "person 2",
        email: "person@person.com",
        phone: "123456789"
    },
    {
        index: 3,
        name: "person 3",
        email: "person@person.com",
        phone: "123456789"
    },
    {
        index: 4,
        name: "person 4",
        email: "person@person.com",
        phone: "123456789"
    },
    {
        index: 5,
        name: "person 5",
        email: "person@person.com",
        phone: "123456789"
    },
    // {
    //     index: 6,
    //     name: "person 6",
    //     email: "person@person.com",
    //     phone: "123456789"
    // },
    // {
    //     index: 7,
    //     name: "person 7",
    //     email: "person@person.com",
    //     phone: "123456789"
    // },
    
    // {
    //     index: 8,
    //     name: "person 8",
    //     email: "person@person.com",
    //     phone: "123456789"
    // },
    
    // {
    //     index: 9,
    //     name: "person 9",
    //     email: "person@person.com",
    //     phone: "123456789"
    // },
    
    
];

function MainComponent() {


    const [toggle, settoggle] = useState(null);
    function handleToggle(i){
        if(toggle === i){
            settoggle(null);
        }else{
            settoggle(i);
        }
    }

    // function handleEdit(){
        
    // }

  return (
    <div className='main-component'>
        <div className="inner-container">
            <Link to='/addcontact' className='add-btn'><HiPlus/> <span>Add new contact</span> </Link>

        {DATA.map((singleContact ) => {
            return(
                <div className="contact-card"  >
                    <div className="contact-name" onClick={() => {handleToggle(singleContact.index)}}>
                        <h2 >{singleContact.name}</h2>
                        <div className="title-controls">
                            <button> <AiOutlineEdit/> </button>
                            <button> <HiTrash/> </button>
                            <span>{toggle === singleContact.index ? <HiMinus/> : <HiPlus/> }</span>
                        </div>
                    </div>
                    <div className={toggle === singleContact.index ? "contact-details show" : "contact-details"}>
                        <p className='contact-email'> <span>Email:</span> {singleContact.email}</p>
                        <p className='contact-phone'> <span>Ph:</span> {singleContact.phone}</p>
                    </div>
                </div>
            );
        })}
        </div>
    </div>
  )
}

export default MainComponent;