import React from "react"

import useTitle from "../hooks/useTitle.jsx"

import CartProduct from "../components/cart/cart_product.jsx"

import "../style/cart/cart.scss"
import "../style/cart/mobile/cart.scss"

function Cart( {products_in_cart, removeFunction} ) {
	useTitle("Cart on Games Shop");

	if (products_in_cart.length > 0) {
		let total_price = 0;

		for (let item of products_in_cart) {
			total_price += Number(item.price.replace(/[^0-9\.-]+/g,""));
		}

		return (
			<div id="cart">
				<div id="title"><h1>Your cart:</h1></div>
				{products_in_cart.map((item) => {
					return <CartProduct key={item.id} product={item} onRemove={removeFunction} />
				})}
				<hr />
				<div id="total_price">
					<div id="text"><h2>Total price:</h2></div>
					<div id="price"><p>{`$${total_price}.00`}</p></div>
				</div>
			</div>
		)
	} else {
		return (
			<div id="cart">
				<h1>Your cart is currently empty.</h1>
			</div>
		)
	}

	
}

export default Cart;
