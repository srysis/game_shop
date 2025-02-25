import React from 'react';

import products from "../../files/products.json"

import "../../style/catalog/catalog.scss"

import Product from "./product.jsx"

function Catalog() {
	return(
		<div id="catalog">
			{products.map((product) => <Product key={product.id} item={product} />)}
		</div>
	)
}

export default Catalog;