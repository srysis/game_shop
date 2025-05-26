import React from 'react';

import useTitle from "../hooks/useTitle.jsx"

import Filters from "../components/filters/filters.jsx"
import Catalog from "../components/catalog/catalog.jsx"

import "../style/home/home.scss"
import "../style/home/mobile/home.scss"

function Home({device_type}) {
	useTitle("Games Shop");

	let saved_filters = JSON.parse(window.sessionStorage.getItem('filters'));

	if (saved_filters === null) saved_filters = [];

	const [filters, setFilters] = React.useState(saved_filters);

	React.useEffect(() => {
		window.sessionStorage.setItem('filters', JSON.stringify(filters));
	}, [filters])

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
			<Filters device_type={device_type} active_filters={filters} setFiltersFunction={setFiltersFunction} removeFilterFunction={removeFilter} resetFiltersFunction={resetFilters} />
			<Catalog filters={filters} />
		</div>
	)
}

export default Home;