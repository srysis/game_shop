import React from "react"

import { Outlet } from 'react-router-dom'

import Header from "./Header.jsx"
import SuccessAddMessage from "./SuccessMessage.jsx"
import SuccessRemoveMessage from "./SuccessMessage.jsx"


function Layout( {was_added, was_removed} ) {
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
			<Header />
			<Outlet />
		</>
	);
}

export default Layout;
