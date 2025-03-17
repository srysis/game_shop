import React from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import products from "./files/products.json"

import Layout from "./components/Layout.jsx"

import Home from "./pages/home.jsx"
import ProductPage from "./pages/product_page.jsx"
import Cart from "./pages/cart.jsx"

function App() {
	// attempt to retrieve data from 'sessionStorage', if it doesn't exist - initialize it with empty array, so the app can work properly
	if (window.sessionStorage.getItem('cart_data') === null) window.sessionStorage.setItem('cart_data', JSON.stringify([]));

	const session_product_IDs = JSON.parse(window.sessionStorage.getItem('cart_data'));

	let products_from_session_storage = [];

	for (let id of session_product_IDs) {

		// get 'product' from the 'session storage' that matches the stored ID and save them
		products_from_session_storage = products_from_session_storage.concat(products.filter((item) => item.id === id))
		
	}

	const [cart_content, setCartContent] = React.useState(products_from_session_storage);

	// instead of adding every single object from 'products' file
	// we will store their IDs into a 'session storage' and retrieve them as required
	React.useEffect(() => {
		const IDs = [];

		cart_content.map(item => IDs.push(item.id));

		window.sessionStorage.setItem('cart_data', JSON.stringify(IDs));
	}, [cart_content]);


	const [was_added, setAdded] = React.useState(false);
	const [was_removed, setRemoved] = React.useState(false);

	const initial_device_type = window.innerWidth < 500 ? "mobile" : "desktop";

	const [device_type, setDeviceType] = React.useState(initial_device_type);

	window.addEventListener("resize", (event) => {
		if (window.innerWidth > 500) {
			setDeviceType("desktop");
		} else {
			setDeviceType("mobile");
		}
	})

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
				<Route element={<Layout was_added={was_added} was_removed={was_removed} cart_content={cart_content} />} >
					<Route path="/" element={<Home device_type={device_type} />} />
					<Route path="/product/:id" element={<ProductPage addToCartFunction={addToCart} isDuplicate={canBeAddedToCart} />} />
					<Route path="/cart" element={<Cart products_in_cart={cart_content} removeFunction={removeFromCart} />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
