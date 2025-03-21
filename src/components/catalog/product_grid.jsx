import React from 'react';
import { Link } from "react-router";

function ProductGrid({ product: {id, box_art, name, tags, price} }) {
	return(
		<div className="product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${id}`} className="details" />
				</div>
				<div className="box_art">
					<img src={`media/images/box_art/${box_art}`} alt={`${name} box art`} />
				</div>
				<div className="title">
					<h2>{name}</h2>
				</div>
			</div>
			<div className="info">
				<div className="price"><p>{price}</p></div>
			</div>
		</div>
	)
}

export default ProductGrid;