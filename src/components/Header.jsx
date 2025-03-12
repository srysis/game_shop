import React from "react"
import { Link } from "react-router";

import cart_icon from "../files/cart.png"

import SearchBar from "./search/search_bar.jsx"
import SearchResults from "./search/search_results.jsx"

import CartOverlay from "./cart/cart_overlay.jsx"

import "../style/layout/header.scss"

function Header({ cart_content }) {
	const [search_queue, setSearchQueue] = React.useState("");
	const [is_searching, setSearching] = React.useState(false);

	const [is_cart_active, setCartActive] = React.useState(false);

	function setSearchQueueFunction(queue) {
		setSearchQueue(queue);
	}

	// to properly hide/show scrollbar, use 'setSearchingFunction(bool)' or 'setCartActiveFunction(bool)'
	// to set state values

	function setSearchingFunction(value) {
		setSearching(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflowX = 'visible';
			document.body.style.overflowY = 'scroll';
			document.body.style.marginRight = 0;
		}
	}

	function setCartActiveFunction(value) {
		setCartActive(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflowX = 'visible';
			document.body.style.overflowY = 'scroll';
			document.body.style.marginRight = 0;
		}
	}

	return (
		<header>
			{is_searching &&
				<div id="search_overlay" onClick={() => setSearchingFunction(false)} ></div>
			}
			{is_cart_active &&
				<div id="cart_overlay" onClick={() => setCartActiveFunction(false)} ></div>
			}
			<div id="logo_container">
				<h1 id="logo"><Link to="/">Game Shop</Link></h1>
			</div>
			<div id="search_container">
				<SearchBar setSearchQueueFunction={setSearchQueueFunction} setSearchingFunction={setSearchingFunction} />
				{(is_searching && search_queue !== "") &&
					<SearchResults setSearchingFunction={setSearchingFunction} search_queue={search_queue.toLowerCase()} />
				}
			</div>
			<div id="cart_container">
				<button type="button" id="open_cart_overlay" onClick={() => {setCartActiveFunction(true)}}><img src={cart_icon} alt="Go to cart" className="cart_icon" /></button>
				{is_cart_active && <CartOverlay cart_content={cart_content} setCartActiveFunction={setCartActiveFunction} />}
			</div>
		</header>
	);
}

export default Header;
