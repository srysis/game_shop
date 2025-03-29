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

	function onClickHandlerMobile() {
		document.querySelector("form#filters_form").classList.toggle("active");
	}

	function onClickHandlerDesktop(event) {
		event.currentTarget.classList.toggle("active");
		event.currentTarget.nextElementSibling.classList.toggle("visible");
	}

	return(
		<div id="filters">
			{ device_type === "mobile" && 
				<>
					<button type="button" className="filters_toggler" onClick={() => onClickHandlerMobile()} >Filters</button>
					<hr />
				</>
			}
			{ device_type === "desktop" && <h2>Filters</h2> }
			<form id="filters_form">
				<div className="filters_container">
					<h3 onClick={onClickHandlerDesktop} >Genre</h3>
					<div>
						{Object.values(filters[0].genre).map((tag, index) => <Filter key={index + 1} filter={tag} onChangeHandler={onChangeHandler} /> )}
					</div>
				</div>
				<div className="filters_container">
					<h3 onClick={onClickHandlerDesktop} >Player count</h3>
					<div>
						{Object.values(filters[0].player_count).map((tag, index) => <Filter key={index + 1} filter={tag} onChangeHandler={onChangeHandler} /> )}
					</div>
				</div>
				<div className="filters_container">
					<h3 onClick={onClickHandlerDesktop} >Format</h3>
					<div>
						{Object.values(filters[0].format).map((tag, index) => <Filter key={index + 1} filter={tag} onChangeHandler={onChangeHandler} /> )}
					</div>
				</div>
				<div className="filters_container">
					<h3 onClick={onClickHandlerDesktop} >Setting</h3>
					<div>
						{Object.values(filters[0].setting).map((tag, index) => <Filter key={index + 1} filter={tag} onChangeHandler={onChangeHandler} /> )}
					</div>
				</div>
				<div className="filters_container">
					<h3 onClick={onClickHandlerDesktop} >Miscellaneous</h3>
					<div>
						{Object.values(filters[0].misc_tags).map((tag, index) => <Filter key={index + 1} filter={tag} onChangeHandler={onChangeHandler} /> )}
					</div>
				</div>
			</form>
		</div>
	)
}

export default Filters;