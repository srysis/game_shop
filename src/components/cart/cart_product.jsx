import React from "react"
import { Link } from "react-router";

import remove_icon from "../../files/cross.svg"

function CartProduct({
	  product: {id, box_art, name, price}, 
	  onRemove
	}) {
	return (
		<div className="cart_product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${id}`} />
				</div>
				<div className="box_art">
					<img src={`media/images/box_art/${box_art}`} alt={`${name} box art`} />
				</div>
				<div className="product_info">
					<h2><Link to={`/product/${id}`}>{name}</Link></h2>
					<p>{price}</p>
				</div>
				<div className="remove_from_cart_container">
					<button type="button" className="remove_from_cart" onClick={ () => { onRemove(id) } }><img src={remove_icon} /></button>
				</div>
			</div>
			
		</div>
	)
}

export default CartProduct;
