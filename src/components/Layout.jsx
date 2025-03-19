import React from "react"

import { Outlet } from 'react-router-dom'

import Header from "./Header.jsx"
import SuccessAddMessage from "./SuccessMessage.jsx"
import SuccessRemoveMessage from "./SuccessMessage.jsx"


function Layout( {device_type, was_added, was_removed, cart_content} ) {
	let message_type = "";

	if (was_added) { 
		message_type = "add";
	} else if (was_removed) { 
		message_type = "remove";
	}

	return (
		<>
			{ was_added && <SuccessAddMessage type={message_type} /> }
			{ was_removed && <SuccessRemoveMessage type={message_type} /> }
			<Header device_type={device_type} cart_content={cart_content} />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
