import React from 'react';
import { Link } from "react-router";

function ProductGrid( {item} ) {
	return(
		<div className="product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${item.id}`} className="details" />
				</div>
				<div className="box_art">
					<img src={`media/images/box_art/${item.box_art}`} alt={`${item.name} box art`} />
				</div>
				<div className="title">
					<h2>{item.name}</h2>
				</div>
			</div>
			<div className="info">
				<div className="price"><p>{item.price}</p></div>
			</div>
		</div>
	)
}

export default ProductGrid;