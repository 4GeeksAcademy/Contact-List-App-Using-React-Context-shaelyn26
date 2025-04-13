import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useState, useEffect} from "react";
import { ContactCard } from "./ContactCard.jsx";
import { Link } from "react-router-dom";


export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const [contactsArray, setContactsArray]= useState("")
	
 	 useEffect(()=>{
		getData()
	}, [])

  // this is a POST request 
	const createAgenda = ()=> {
		// to make POST method, create an options object
		const option = {
			method: "POST",
	// headers also from Postman Site as the 'format' always using JSON 	
			headers: {
				"Content-type": "application/json"
			},
	// the 'body' is where we get it from PostMan site
			body: JSON.stringify({
				"slug": "Shae",
				"id": 0
			  })
		}
		fetch("https://playground.4geeks.com/contact/agendas/shae", option)
		.then((resp) => {
			if(resp.ok == false){
				console.log("failed to create")
			}
			else(
				getData()
			)
			return resp.json()
		})
		.then((data)=> console.log("agenda created! ", data))
	}

// this is a GET request 
	const getData = () => {
		fetch("https://playground.4geeks.com/contact/agendas/shaelyn")
		.then((resp)=> {
			console.log("resp: ", resp)
			if(resp.ok == false){
				createAgenda()
			}
			else{
				return resp.json()
			}
		})
		.then((data)=>{
			dispatch({type: "set-contact-list", payload: data.contacts})
		} )
		}
  
  
  	useEffect(()=> {
		getData();
  
},[])
  console.log(store,"contact listttt" );
// {/* <ContactCard contact = contact /> */} map the contacts
	console.log(store.contactsArray, "im here !!!!")
  return (
    <div className="text-center mt-5">
		{/* {condition ? if true do this (this where we map if its true) : if not do this} */}
		{store.contactsArray.length > 0 ?
		store.contactsArray.map(
			(contacts)=> {
			return(
				<div className="m-3 bg-success">
					<div>name: {contacts.name}</div>
					<div>email: {contacts.email}</div>
					<div>phone: {contacts.phone}</div>
					<div>address: {contacts.address}</div>
					<Link to="/submit">
					<button
					onClick={()=>{
						dispatch({ type:"set-single-contact", payload: contacts })
						}}			
						>
						Edit</button>
					</Link>
				</div>
			)
		}) 
			:
	      "no contacts found"}
     <ContactCard/>
    </div>
  );
};
