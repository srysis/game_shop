import React from 'react';
import { useParams } from 'react-router-dom'

import products from "../files/products.json"

import ProductScreenshots from "../components/product_page/product_screenshots.jsx"
import ScreenshotOverlay from "../components/product_page/screenshot_overlay.jsx"

import "../style/catalog/product/product_page.scss"

function ProductPage() {
	const { id } = useParams();

	const product = products[id - 1];

	const [is_fullscreen, toggleFullscreen] = React.useState(false);
	const [current_image, setCurrentImage] = React.useState();
	const [current_image_index, setCurrentImageIndex] = React.useState(0);

	function setFullscreenState(value) {
		toggleFullscreen(value);

		// hide scrollbar and adjust margin if fullscreen overlay is visible
		if (value) { 
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = 0.4 + "%";
		} else { 
			document.body.style.overflow = 'visible';
			document.body.style.marginRight = 0;
		}
	}

	function setCurrentImageState(image) {
		setCurrentImage(image);
	}

	function setCurrentImageIndexState(index) {
		setCurrentImageIndex(index);
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
					<button type="button" className="buy">Add to Cart</button>
				</div>
			</div>

			<ProductScreenshots 
				image_list={product.screenshots_small}
				toggleFullscreenFunction={setFullscreenState}
				setCurrentImageFunction={setCurrentImageState}
				setCurrentImageIndexFunction={setCurrentImageIndexState}
			/>

			{is_fullscreen && 
				<ScreenshotOverlay 
					image_list={product.screenshots_small} 
					image={current_image} 
					toggleFullscreenFunction={setFullscreenState} 
				/>
			}
		</div>
	)
}

export default ProductPage;