import React from "react";

export const ContactCard = (contact) =>{
    return (
    <div className="container">
        <h2>{contact.name}</h2>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <h5>{contact.email}</h5>

    </div>
    )
}

// this page display the 'LIST OF CONTACTS' 
// error; 
// delete button has to be pressed 2x to function 

// things to add/change;
// 1.add icons for delete/edit button and display to the right of contact info
// 2.add profile demo image (left side)
// 3. fix 'add contact' page appearance
