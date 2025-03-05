import React from 'react';

import products from "../../files/products.json"

import "../../style/catalog/catalog.scss"

import grid_icon from "../../files/grid-view.png"
import list_icon from "../../files/list-view.png"

import ProductGrid from "./product_grid.jsx"
import ProductList from "./product_list.jsx"

function Catalog({filters}) {
	const [view_mode, setViewMode] = React.useState("list");

	// used as a limit for the 'for' loop
	let filters_size = filters.length;

	// 'filtered_products' is a temporary array, used in the 'for' loop
	let filtered_products = [];

	// 'final_products' is used for the render
	let final_products = [];


	// if no filters were passed, assign global 'products' JSON data to the 'final_products'
	// NOTE: it is probably not the most efficient way to handle such things, but it will pass for now
	if (filters_size === 0) final_products = products;


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
		final_products = final_products.concat(filtered_products);
	}

	return(
		<div id="catalog">
			<div id="view_container">
				<div id="view">
					<div id="grid_view"><button type="button" onClick={() => {setViewMode("grid")}}><img src={grid_icon} alt=""/></button></div>
					<div id="list_view"><button type="button" onClick={() => {setViewMode("list")}}><img src={list_icon} alt=""/></button></div>
				</div>
			</div>
			{view_mode === "grid" && 
				<div id="products" className="grid" >
					{final_products.map((product) => <ProductGrid key={product.id} item={product} />)}
				</div>
			}
			{view_mode === "list" &&
				<div id="products" className="list" >
					{final_products.map((product) => <ProductList key={product.id} item={product} />)}
				</div>
			}
		</div>
	)
}

export default Catalog;