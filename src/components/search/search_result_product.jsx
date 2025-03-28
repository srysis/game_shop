import React from "react"
import { Link } from "react-router";

function SearchResultProduct({
	  product: {id, box_art, name, price}, 
	  setSearchingFunction
	}) {
	return (
		<div className="search_result_product">
			<div className="link_container">
				<div className="overlay">
					<Link to={`/product/${id}`} className="details" onClick={() => { setSearchingFunction(false); } }  />
				</div>
				<div className="box_art">
					<img src={`/media/images/box_art/${box_art}`} alt={`${name} box art`} />
				</div>
				<div className="title">
					<h2>{name}</h2>
					<span className="price"><p>{price}</p></span>
				</div>
			</div>
		</div>
	);
}

export default SearchResultProduct;
