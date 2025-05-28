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

// this page display the list of contacts--- 
// errors; 
// 1. delete button has to be pressed 2x to function 
// 2.only can have 2 contacts at a time, if attempt to add a 3rd.. page goes to last contact made (the 2nd contact)
// 3. 2nd contacted that is added, gets duplicated multiple times