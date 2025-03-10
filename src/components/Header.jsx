import React from "react"
import { Link } from "react-router";

import cart_icon from "../files/cart.png"

import SearchBar from "./search/search_bar.jsx"
import SearchResults from "./search/search_results.jsx"

import "../style/layout/header.scss"

function Header() {
	const [search_queue, setSearchQueue] = React.useState("");
	const [is_searching, setSearching] = React.useState(false);

	function setSearchQueueFunction(queue) {
		setSearchQueue(queue);
	}

	function setSearchingFunction(value) {
		setSearching(value);
	}

	return (
		<header>
			{is_searching &&
				<div id="search_overlay" onClick={() => setSearching(false)} ></div>
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
			<div id="cart_link_container">
				<Link to="/cart" ><img src={cart_icon} alt="Go to cart" className="cart_icon" /></Link>
			</div>
		</header>
	);
}

export default Header;
