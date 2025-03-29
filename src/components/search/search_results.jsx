import React from "react"

import products from "../../files/products.json"

import SearchResultProduct from "./search_result_product.jsx"

import "../../style/search/search_results.scss"
import "../../style/search/mobile/search_results.scss"

function SearchResults({setSearchingFunction, search_queue}) {
	let search_results = products.filter(item => item.name.toLowerCase().includes(search_queue)).slice(0, 4);


	if (search_results.length > 0) {
		return (
			<div id="search_results">
				{search_results.map((item, index) => <SearchResultProduct key={item.id} product={item} setSearchingFunction={setSearchingFunction} />)}
			</div>
		);
	} else {
		return (
			<div id="search_results">
				<h2 id="empty_results">No games that match the given queue were found.</h2>
			</div>
		);
	}
	
}

export default SearchResults;
