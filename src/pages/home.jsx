import React from 'react';

import useTitle from "../hooks/useTitle.jsx"

import Catalog from "../components/catalog/catalog.jsx"
import Filters from "../components/filters/filters.jsx"

import "../style/home.scss"

function Home() {
	useTitle("Games Shop")

	const [filters, setFilters] = React.useState([]);

	function setFiltersFunction(filter) {
		setFilters([...filters, filter]);
	}

	function removeFilter(filter) {
		const new_filters = filters.filter((item) => item !== filter);

		setFilters(new_filters);
	}

	function resetFilters() {
		setFilters([]);
	}

	return(
		<div id="home">
			<Filters setFiltersFunction={setFiltersFunction} removeFilterFunction={removeFilter} />
			<Catalog filters={filters} />
		</div>
	)
}

export default Home;