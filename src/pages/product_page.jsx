import React from 'react';
import { useParams } from 'react-router-dom'

import products from "../files/products.json"

import ProductScreenshots from "../components/product_page/product_screenshots.jsx"

import "../style/catalog/product/product_page.scss"

function ProductPage() {
	const { id } = useParams();

	const product = products[id - 1];

	return(
		<div id="product_page">
			<div className="product_details">
				<div className="box_art">
					<img src={`media/images/box_art/${product.box_art}`} alt={`${product.name} box art`} />
				</div>
				<div className="info_and_options">
					<h2>{product.name}</h2>
					<p>{product.short_desc}</p>
					<button type="button" className="buy">Add to Cart</button>
				</div>
			</div>
			<ProductScreenshots image_list={product.screenshots_small} />
		</div>
	)
}

export default ProductPage;