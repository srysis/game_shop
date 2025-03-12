import React from "react"
import { Link } from "react-router";

function CartOverlayProduct( {product, setCartActiveFunction} ) {
	return (
		<div className="cart_overlay_product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${product.id}`} onClick={() => { setCartActiveFunction(false) }} />
				</div>
				<div className="box_art">
					<img src={`media/images/box_art/${product.box_art}`} alt={`${product.name} box art`} />
				</div>
				<div className="product_info">
					<h2>{product.name}</h2>
					<span className="price"><p>{product.price}</p></span>
				</div>
			</div>
		</div>
	)
}

export default CartOverlayProduct;
