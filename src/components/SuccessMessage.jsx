import React from "react"

import acknowledge_icon from "../files/confirm-icon.png"

import "../style/layout/message.scss"
import "../style/layout/mobile/message.scss"

function SuccessMessage( {type, onClickHandler} ) {
	return (
		<div className={type === "add" ? "message added" : type === "remove" ? "message removed" : ""} onClick={() => {onClickHandler()}} >
			<div className="icon_container">
				<img src={acknowledge_icon} />
			</div>
			<div className="text_container">
				<h2>Success!</h2>
				<p>{type === "add" ? "Product was added to your cart" : type === "remove" ? "Product was removed from your cart" : undefined}</p>
			</div>
		</div>
	);
}

export default SuccessMessage;
