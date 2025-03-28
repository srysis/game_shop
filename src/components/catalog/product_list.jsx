import React from 'react';
import { Link } from "react-router";

function ProductList({ product: {id, box_art, name, tags, price}, onClickHandler }) {
	return(
		<div className="product">
			<div className="overlay">
				<Link to={`/product/${id}`} className="details" onClick={onClickHandler} />
			</div>
			<div className="box_art">
				<img src={`/media/images/box_art/${box_art}`} alt={`${name} box art`} />
			</div>
			<div className="title">
				<h2>{name}</h2>
				<span>{Object.values(tags).map((tag, index) => <span key={index}>{tag}</span>)}</span>
			</div>
			<div className="info">
				<div className="price"><p>{price}</p></div>
			</div>
		</div>
	)
}

export default ProductList;