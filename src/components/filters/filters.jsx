import React from 'react';

import filters from "../../files/filters.json"

import Filter from "./filter.jsx"

import "../../style/home/filters.scss"
import "../../style/home/mobile/filters.scss"

function Filters({device_type, setFiltersFunction, removeFilterFunction}) {
	function onChangeHandler(checkbox, value) {
		if (checkbox.checked) {
			setFiltersFunction(value);
		} else {
			removeFilterFunction(value);
		}
	}

	function onClickHandler() {
		document.querySelector("form#filters_form").classList.toggle("active");
	}

	return(
		<div id="filters">
			{ device_type === "mobile" && 
				<>
					<button type="button" className="filters_toggler" onClick={() => onClickHandler()} >Filters</button>
					<hr />
				</>
			}
			<h1>Filters</h1>
			<form id="filters_form">
				{filters.map((filter) => <Filter key={filter.id} filter={filter.tag} onChangeHandler={onChangeHandler} />)}
			</form>
		</div>
	)
}

export default Filters;