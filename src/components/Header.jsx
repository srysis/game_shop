import React from "react"
import { Link } from "react-router";

import cart_icon from "../files/cart.png"

import "../style/layout/header.scss"

function Header() {
	return (
		<header>
			<h1 id="logo"><Link to="/">Game Shop</Link></h1>
			<input type="search" placeholder="Looking for a specific game?" id="search_bar" />
			<Link to="/cart" ><img src={cart_icon} className="cart_icon" /></Link>
		</header>
	);
}

export default Header;
