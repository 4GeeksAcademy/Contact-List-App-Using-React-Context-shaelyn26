import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const ContactSubmit = () => {

    const { store, dispatch } = useGlobalReducer()


    const [name, setName]= useState(store.singleContact.name)
    const [email, setEmail]= useState(store.singleContact.email)
    const [phone, setPhone]= useState(store.singleContact.phone)
    const [address, setAddress]= useState(store.singleContact.address)
    console.log("i've arrived", store)
    
    
    const submitContact = () => {
        const option = {
			method:"POST",
			headers:{
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
              })
		}
        fetch("https://playground.4geeks.com/contact/agendas/shaelyn/contacts", option)
        .then((resp)=> resp.json())
        .then((data)=> console.log("contact created: ", data))
    }


    const updateContact = (id) => {
        const option = {
			method:"PUT",
			headers:{
				"Content-Type": "application/json"
			},
			body:JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
              })
		}
        fetch("https://playground.4geeks.com/contact/agendas/shae/contacts/"+id, option)
        .then((resp)=> resp.json())
        .then((data)=> console.log("contact created: ", data))
    }
    return(
	<div>
        <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="name"/>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="text" placeholder="email"/>
        <input onChange={(e)=> setPhone(e.target.value)} value={phone} type="text" placeholder="phone"/>
        <input onChange={(e)=> setAddress(e.target.value)}value={address} type="text" placeholder="address"/>
        <button onClick={submitContact}> Submit </button>
        <button onClick={()=>updateContact(store.singleContact.id)}> Update </button>
    </div>
)};