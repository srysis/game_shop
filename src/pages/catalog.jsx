import React from 'react';
import ReactDOM from 'react-dom/client';

import products from "../files/products.json"

import "../style/catalog/catalog.scss"

import Product from "../components/catalog/product.jsx"

class Catalog extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div id="catalog">
				{products.map((product) => <Product key={product.id} boxArt={product.box_art} title={product.name} price={product.price} />)}
			</div>
		)
	}
}

export default Catalog;