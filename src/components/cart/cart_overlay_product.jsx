import React from "react"
import { Link } from "react-router";

function CartOverlayProduct({
	  product: {id, box_art, name, price}, 
	  setCartActiveFunction
	}) {
	return (
		<div className="cart_overlay_product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${id}`} onClick={() => { setCartActiveFunction(false) }} />
				</div>
				<div className="box_art">
					<img src={`/media/images/box_art/${box_art}`} alt={`${name} box art`} />
				</div>
				<div className="product_info">
					<h2>{name}</h2>
					<span className="price"><p>{price}</p></span>
				</div>
			</div>
		</div>
	)
}

export default CartOverlayProduct;
