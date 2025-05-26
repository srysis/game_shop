import React from 'react';
import { useParams } from 'react-router-dom'

import useTitle from "../hooks/useTitle.jsx"

import products from "../files/products.json"

import ProductScreenshots from "../components/product_page/product_screenshots.jsx"
import ScreenshotOverlay from "../components/product_page/screenshot_overlay.jsx"

import "../style/product/product_page.scss"
import "../style/product/mobile/product_page.scss"

function ProductPage({device_type, addToCartFunction, isDuplicate}) {
	const { id } = useParams();

	const product = products[id - 1];

	const { box_art, name, short_desc, tags, screenshots_ld, screenshots_hd } = product;

	useTitle(`Buy ${name} on Games Shop`);

	const [is_fullscreen, toggleFullscreen] = React.useState(false);
	const [current_image, setCurrentImage] = React.useState();

	const [current_image_index, setCurrentImageIndex] = React.useState(0);

	let is_duplicate = isDuplicate(product);

	React.useEffect(() => {
		document.title = `Buy ${name} on Games Shop`;
	}, [name]);

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


	let scroll_positions = JSON.parse(window.sessionStorage.getItem('scroll_positions'));

	if (scroll_positions === null) scroll_positions = [];

	window.addEventListener('popstate', onPopStateHandler);

	function onPopStateHandler(event) {
		let last_scroll_position = scroll_positions[scroll_positions.length - 1];
		window.scrollTo(0, last_scroll_position);

		scroll_positions.pop();
		window.sessionStorage.setItem('scroll_positions', JSON.stringify(scroll_positions));
		window.removeEventListener('popstate', onPopStateHandler);
	}
	

	function onAddHandler(item) {
		if (isDuplicate(item)) { 
			return;
		}
		
		addToCartFunction(item);
	}

	function constructDescription() {
		let description_strings = Object.values(product.desc);
		let description_container = document.querySelector("div.product_description")
		let final_string = "";

		for (let description_string of description_strings) {
			final_string += description_string;
		}

		description_container.innerHTML = final_string;
	}

	return(
		<div id="product_page" onLoad={constructDescription}>
			<div className="product_details">
				<div className="box_art">
					<img src={`/media/images/box_art/${box_art}`} alt={`${name} box art`} />
				</div>
				<div className="info_and_options">
					<h2>{name}</h2>
					<div className="tags_container">{Object.values(tags).map((tag, index) => <span key={index}>{tag}</span>)}</div>
					<p>{short_desc}</p>
					<div className="buy_container">
						<p className="price">{product.price}</p>
						{ !is_duplicate && <button type="button" className="buy" onClick={ () => { onAddHandler(product); } } >Add to Cart</button> }
						{ is_duplicate && <button type="button" className="is_in_cart" disabled >In the cart</button> }
					</div>
				</div>
			</div>

			<div id="description_wrapper">
				<div className="description_title">
					<h2>About the game:</h2>
					<hr />
				</div>
				<div className="product_description"></div>
			</div>

			<ProductScreenshots 
				device_type={device_type}
				image_list={screenshots_ld}
				toggleFullscreenFunction={setFullscreenState}
				setCurrentImageFunction={setCurrentImageState}
				setCurrentImageIndexFunction={setCurrentImageIndexState}
			/>

			{is_fullscreen && 
				<ScreenshotOverlay 
					device_type={device_type}
					image_list={screenshots_hd} 
					image={current_image} 
					image_index={current_image_index}
					toggleFullscreenFunction={setFullscreenState} 
				/>
			}
		</div>
	)
}

export default ProductPage;