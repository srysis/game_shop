import React from "react"

import remove_icon from "../../files/cross.svg"

function CartProduct( {product, onRemove} ) {
	return (
		<div className="cart_product">
			<div className="product_info">
				<h1>{product.name}</h1>
			</div>
			<div className="remove_from_cart_container">
				<button type="button" className="remove_from_cart" onClick={ () => { onRemove(product.id) } }><img src={remove_icon} /></button>
			</div>
			
		</div>
	)
}

export default CartProduct;
