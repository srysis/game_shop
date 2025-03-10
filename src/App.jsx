import React from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout.jsx"

import Home from "./pages/home.jsx"
import ProductPage from "./pages/product_page.jsx"
import Cart from "./pages/cart.jsx"

function App() {
	const [cart_content, setCartContent] = React.useState([]);

	const [was_added, setAdded] = React.useState(false);
	const [was_removed, setRemoved] = React.useState(false);

	function showMessage(type) {
		// reset states to clear all previous messages
		setAdded(false);
		setRemoved(false)

		if (type === "add") {
			setAdded(true);

			toggleMessage(type);

		} else if (type === "remove") {
			setRemoved(true);

			toggleMessage(type);
		}
	}

	function toggleMessage(type) {
		if (type === "add") {
			setTimeout(setAddedMessageTimeout, 5000);
		} else if (type === "remove") {
			setTimeout(setRemovedMessageTimeout, 5000);
		}
	}

	function setAddedMessageTimeout() {
		setAdded(false);
	}

	function setRemovedMessageTimeout() {
		setRemoved(false);
	}

	function canBeAddedToCart(product) {
		return (cart_content.includes(product));
	}

	function addToCart(product) {
		setCartContent([...cart_content, product]);

		showMessage("add");
	}

	function removeFromCart(product_id) {
		const new_cart_content = cart_content.filter((item) => item.id !== product_id);

		setCartContent(new_cart_content);

		showMessage("remove");
	}

	return (
		<Router>
			<Routes>
				<Route element={<Layout was_added={was_added} was_removed={was_removed} />} >
					<Route path="/" element={<Home />} />
					<Route path="/product/:id" element={<ProductPage addToCartFunction={addToCart} isDuplicate={canBeAddedToCart} />} />
					<Route path="/cart" element={<Cart products_in_cart={cart_content} removeFunction={removeFromCart} />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
