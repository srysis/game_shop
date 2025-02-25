import React from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout.jsx"

import Home from "./pages/home.jsx"
import ProductPage from "./pages/product_page.jsx"
import Cart from "./pages/cart.jsx"

function App() {
	const [cart_content, setCartContent] = React.useState([]);

	function canBeAddedToCart(product) {
		return (cart_content.includes(product));
	}

	function addToCart(product) {
		console.log("Received: " + product);

		setCartContent([...cart_content, product]);
	}

	function removeFromCart(product_id) {
		const new_cart_content = cart_content.filter((item) => item.id !== product_id);

		setCartContent(new_cart_content);
	}

	return (
		<Router>
			<Routes>
				<Route element={<Layout />} >
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ProductPage addToCartFunction={addToCart} isDuplicate={canBeAddedToCart} />} />
					<Route path="/cart" element={<Cart products_in_cart={cart_content} removeFunction={removeFromCart} />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
