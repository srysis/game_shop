import React from "react"
import { Link } from "react-router";

function SearchResultProduct({product, setSearchingFunction}) {

	return (
		<div className="search_result_product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${product.id}`} className="details" onClick={() => { setSearchingFunction(false); } }  />
				</div>
				<div className="box_art">
					<img src={`media/images/box_art/${product.box_art}`} alt={`${product.name} box art`} />
				</div>
				<div className="title">
					<h2>{product.name}</h2>
					<span className="price"><p>{product.price}</p></span>
				</div>
			</div>
		</div>
	);
}

export default SearchResultProduct;
