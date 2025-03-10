import React from 'react';
import { useParams } from 'react-router-dom'

import useTitle from "../hooks/useTitle.jsx"

import products from "../files/products.json"

import ProductScreenshots from "../components/product_page/product_screenshots.jsx"
import ScreenshotOverlay from "../components/product_page/screenshot_overlay.jsx"


import "../style/catalog/product/product_page.scss"

function ProductPage({addToCartFunction, isDuplicate}) {
	const { id } = useParams();

	const product = products[id - 1];

	useTitle(`Buy ${product.name} on Games Shop`);

	const [is_fullscreen, toggleFullscreen] = React.useState(false);
	const [current_image, setCurrentImage] = React.useState();

	const [current_image_index, setCurrentImageIndex] = React.useState(0);

	let is_duplicate = isDuplicate(product);

	function setFullscreenState(value) {
		toggleFullscreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflowX = 'hidden';
			document.body.style.overflowY = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflowX = 'visible';
			document.body.style.overflowY = 'scroll';
			document.body.style.marginRight = 0;
		}
	}

	function setCurrentImageState(image) {
		setCurrentImage(image);
	}

	function setCurrentImageIndexState(index) {
		setCurrentImageIndex(index);
	}

	function onAddHandler(item) {
		if (isDuplicate(item)) { 
			return;
		}
		
		addToCartFunction(item);
	}

	return(
		<div id="product_page">
			<div className="product_details">
				<div className="box_art">
					<img src={`media/images/box_art/${product.box_art}`} alt={`${product.name} box art`} />
				</div>
				<div className="info_and_options">
					<h2>{product.name}</h2>
					<p>{product.short_desc}</p>
					<div className="buy_container">
						<p className="price">{product.price}</p>
						{ !is_duplicate && <button type="button" className="buy" onClick={ () => { onAddHandler(product); } } >Add to Cart</button> }
						{ is_duplicate && <button type="button" className="is_in_cart" disabled >In the cart</button> }
					</div>
					
				</div>
			</div>

			<ProductScreenshots 
				image_list={product.screenshots_ld}
				toggleFullscreenFunction={setFullscreenState}
				setCurrentImageFunction={setCurrentImageState}
				setCurrentImageIndexFunction={setCurrentImageIndexState}
			/>

			{is_fullscreen && 
				<ScreenshotOverlay 
					image_list={product.screenshots_hd} 
					image={current_image} 
					image_index={current_image_index}
					toggleFullscreenFunction={setFullscreenState} 
				/>
			}
		</div>
	)
}

export default ProductPage;