import React from "react"

import CartProduct from "../components/cart/cart_product.jsx"

import "../style/cart/cart.scss"

function Cart( {products_in_cart, removeFunction} ) {
	if (products_in_cart.length > 0) {
		return (
			<div id="cart">
				{products_in_cart.map((item) => {
					return <CartProduct key={item.id} product={item} onRemove={removeFunction} />
				})}
			</div>
		)
	} else {
		return (
			<div id="cart">
				<h2>Your cart is currently empty.</h2>
			</div>
		)
	}

	
}

export default Cart;
