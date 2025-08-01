import React from 'react';

import products from "../../files/products.json"

import "../../style/home/catalog.scss"
import "../../style/home/mobile/catalog.scss"

import grid_icon from "../../files/grid-view.png"
import list_icon from "../../files/list-view.png"

import ProductGrid from "./product_grid.jsx"
import ProductList from "./product_list.jsx"

function Catalog({filters}) {
	let scroll_positions = JSON.parse(window.sessionStorage.getItem('scroll_positions'));

	if (scroll_positions === null) scroll_positions = [];

	
	window.addEventListener('popstate', () => {
		window.scrollTo(0, 0);
	});



	let saved_catalog_size = JSON.parse(window.sessionStorage.getItem('catalog_size'));

	// initialize 'catalog_size' if session key has not been created yet
	if (saved_catalog_size === null) saved_catalog_size = 6;

	const [catalog_size, setCatalogSize] = React.useState(saved_catalog_size);



	let saved_view_mode = JSON.parse(window.sessionStorage.getItem('view_mode'));

	// specify default view mode if session key has not been created yet
	if (saved_view_mode === null) saved_view_mode = "list";

	const [view_mode, setViewMode] = React.useState(saved_view_mode);

	window.addEventListener('load', () => {
		// check the view mode and mark corresponding button as 'pressed'
		if (view_mode === "list") document.querySelector('button.list').classList.add("pressed");
		if (view_mode === "grid") document.querySelector('button.grid').classList.add("pressed");
	})
	
	

	const [has_reached_end, setHasReachedEnd] = React.useState(false);

	React.useEffect(() => {
		if (catalog_size === products.length) setHasReachedEnd(true);
	}, []);



	// used as a limit for the 'for' loop
	let filters_size = filters.length;

	// only certain amount of products will be used for filtering and rendering
	// the size will increase with the state's value increasing as well, which happens on user input
	let init_products = products.slice(0, catalog_size);

	// 'filtered_products' is a temporary array, used in the 'for' loop
	let filtered_products = [];

	// 'final_products_ARRAY' is an array that will store products that satisfy given filters
	// but due to how 'filter' feature was implemented, duplicates will appear in this array
	// 'final_products' will keep products with only ONE instance
	let final_products_ARRAY = [];
	let final_products = [];

	
	// if no filters were passed, assign global 'products' JSON data to the 'final_products'
	// but if there are filters being passed back to this component, do the code in the 'else' block
	// NOTE: it is probably not the most efficient way to handle such things, but it will pass for now
	if (filters_size === 0) {
		final_products = init_products;
	} else {

		// in this loop we will iterate through every filter that were passed to this component
		for (let index = 0; index < filters_size; index++) {

			// 'filtered_products' will store 'products' that satisfy the filter the loop is currently on
			// e.g. if the loop is currently on 'action' filter, it will store every product with the 'action' tag in it
			filtered_products = products.filter((product) => {
				for (let tag of Object.values(product.tags)) {
					if (tag.toLowerCase() === filters[index]) return true;
				}
			})

			// after 'filtered_products' has been assigned, we add it's elements to the array
			// in the last iteration, all 'products' that satisfy each filter individually will be stored here
			// e.g. if one 'product' has 'stealth' and the other one has 'shooter' tag in them, they both will be stored
			final_products_ARRAY = final_products_ARRAY.concat(filtered_products);
		}

		// 'temp_set' is a temporary 'Set' array
		// 'Sets' do not allow more than one entry of any value, making it perfect for 'filter' feature
		let temp_set = new Set(final_products_ARRAY);

		final_products = [...temp_set];
	}

	function increaseCatalogSize() {
		let init_size = catalog_size;

		let new_size = init_size + 4;

		if (new_size >= products.length) {
			setHasReachedEnd(true);
			new_size = products.length; 
		}

		setCatalogSize(new_size);
	}

	function onViewSwitchClickHandler(event) {
		if (event.currentTarget.classList.contains("grid")) {
			setViewMode("grid");

			document.querySelector("div#list_view > button").classList.remove("pressed");
			event.currentTarget.classList.add("pressed");

			window.sessionStorage.setItem('view_mode', JSON.stringify("grid"));
		} else if (event.currentTarget.classList.contains("list")) {
			setViewMode("list");

			document.querySelector("div#grid_view > button").classList.remove("pressed");
			event.currentTarget.classList.add("pressed");

			window.sessionStorage.setItem('view_mode', JSON.stringify("list"));
		}
	}

	function onProductClickHandler(event) {
		// store scroll position BEFORE scrolling to the top
		scroll_positions.push(window.scrollY);
		window.sessionStorage.setItem('scroll_positions', JSON.stringify(scroll_positions));

		window.scrollTo(0, 0);

		window.sessionStorage.setItem('catalog_size', JSON.stringify(catalog_size));
	}



	// function that checks if given element is in the user's browser's viewport by X percent, where X is from 0 to 100
	function isVisibleInViewport(element, percentage) {
		let rect = element.getBoundingClientRect();
		let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

		return !(
			Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentage ||
			Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentage
		)
	};

	function loadMoreProducts() {
		const button = document.querySelector("button#load_more");

		if (button != null) {
			if (isVisibleInViewport(button, 100)) {
				button.click();
			}
		}
	}

	React.useEffect(() => {
		if (!has_reached_end) window.addEventListener("scroll", loadMoreProducts);
		if (has_reached_end) window.removeEventListener("scroll", loadMoreProducts);
	}, [has_reached_end])
	

	window.addEventListener('beforeunload', onBeforeUnloadHandler)


	function onBeforeUnloadHandler() {
		window.sessionStorage.setItem('catalog_size', JSON.stringify(6));
		window.sessionStorage.setItem('scroll_positions', JSON.stringify([]));
	}


	return(
		<div id="catalog">
			<div id="view_container">
				<div id="view">
					<div id="grid_view">
						<button type="button" className={view_mode === "grid" ? "grid pressed" : "grid"} onClick={onViewSwitchClickHandler}>
							<img src={grid_icon} alt=""/>
						</button>
					</div>
					<div id="list_view">
						<button type="button" className={view_mode === "list" ? "list pressed" : "list"} onClick={onViewSwitchClickHandler} >
							<img src={list_icon} alt=""/>
						</button>
					</div>
				</div>
			</div>
			{view_mode === "grid" && 
				<div id="products" className="grid" >
					{final_products.map((product) => <ProductGrid key={product.id} product={product} onClickHandler={onProductClickHandler} />)}
				</div>
			}
			{view_mode === "list" &&
				<div id="products" className="list" >
					{final_products.map((product) => <ProductList key={product.id} product={product} onClickHandler={onProductClickHandler} />)}
				</div>
			}
			{(!has_reached_end && filters_size === 0) && <button type="button" id="load_more" onClick={() => { increaseCatalogSize() } } >Load more</button> }
		</div>
	)
}

export default Catalog;