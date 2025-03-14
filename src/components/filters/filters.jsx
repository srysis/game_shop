import React from 'react';

import "../../style/home/filters.scss"

function Filters({setFiltersFunction, removeFilterFunction}) {
	function onChangeHandler(checkbox, value) {
		if (checkbox.checked) {
			setFiltersFunction(value);
		} else {
			removeFilterFunction(value);
		}
	}

	return(
		<div id="filters">
			<form>
				<label htmlFor="stealth" className="checkbox_container">
					Stealth
					<input type="checkbox" name="tag_filter" id="stealth" value="Stealth" onChange={(event) => { onChangeHandler(event.target, event.target.value.toLowerCase()); } } />
					<span className="checkmark"></span>
				</label>
				<label htmlFor="shooter" className="checkbox_container">
					Shooter
					<input type="checkbox" name="tag_filter" id="shooter" value="Shooter" onChange={(event) => { onChangeHandler(event.target, event.target.value.toLowerCase()); } } />
					<span className="checkmark"></span>
				</label>
			</form>
		</div>
	)
}

export default Filters;