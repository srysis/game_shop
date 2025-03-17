import React from 'react';

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
			<form id="filters_form">
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