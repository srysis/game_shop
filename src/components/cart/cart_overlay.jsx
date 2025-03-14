import React from "react"
import { Link } from "react-router";

import CartOverlayProduct from "./cart_overlay_product.jsx"

import "../../style/cart/cart_overlay.scss"

function CartOverlay( {cart_content, setCartActiveFunction} ) {

	if (cart_content.length > 0) {
		return (
			<div id="cart_overlay_content">
				<h1>Your cart</h1>
				{cart_content.map((item, index) => <CartOverlayProduct key={item.id} product={item} setCartActiveFunction={setCartActiveFunction} />)}
				<div id="go_to_cart"><Link to="/cart" onClick={() => setCartActiveFunction(false)}>Manage cart</Link></div>
			</div>
		);
	} else {
		return (
			<div id="cart_overlay_content">
				<h1 className="empty_cart">Your cart is currently empty.</h1>
			</div>
		);
	}
}

export default CartOverlay;
