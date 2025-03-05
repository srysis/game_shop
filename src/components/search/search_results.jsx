import React from "react"

import products from "../../files/products.json"

import SearchResultProduct from "./search_result_product.jsx"

import "../../style/search/search_results.scss"

function SearchResults({setSearchingFunction, search_queue}) {
	let search_results = products.filter(item => item.name.toLowerCase().includes(search_queue))

	return (
		<div id="search_results">
			{search_results.slice(0, 4).map((item, index) => <SearchResultProduct key={item.id} product={item} setSearchingFunction={setSearchingFunction} />)}
		</div>
	);
}

export default SearchResults;
