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
// errors; 
// 1. delete button has to be pressed 2x to function 
// 2.only can have 2 contacts at a time, if attempt to edit a 3rd.. page goes to last contact made (the 2nd contact)

// things to add/change;
// 1.add icons for delete/edit button and display to the right of contact info
// 2.add profile demo image (left side)
// 3. fix 'add contact' page appearance
