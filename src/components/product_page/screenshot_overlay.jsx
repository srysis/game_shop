import React from 'react';

import cross from "../../files/cross.svg"

function ScreenshotOverlay( {image_list, image, image_index, toggleFullscreenFunction} ) {
	const image_paths = Object.values(image_list);

	const [current_image_index, setCurrentImageIndex] = React.useState(image_index);

	React.useEffect(() => {
		let requested_image = image_paths[current_image_index - 1];

		let full_path_to_image = `media/images/screenshots/${requested_image}`;
		
		let image_container = document.querySelector("img.image_fullscreen");
		image_container.setAttribute("src", full_path_to_image);
	}, [current_image_index])

	function switchToPreviousImage() {
		let temp_index = current_image_index;

		temp_index--;

		if (temp_index <= 0) {
			temp_index = image_paths.length;
		}

		setCurrentImageIndex(temp_index)

		console.log('left');
	}

	function switchToNextImage() {
		let temp_index = current_image_index;

		temp_index++;

		if (temp_index > image_paths.length) {
			temp_index = 1;
		}

		setCurrentImageIndex(temp_index);

		console.log('right');
	}

	return(
		<div id="image_fullscreen_overlay_container">
			<button id="prev_image" onClick={() => switchToPreviousImage()} >&lt;</button> 
			<img className="image_fullscreen" src={`media/images/screenshots/${image}`} alt="" />
			<button id="next_image" onClick={() => switchToNextImage()} >&gt;</button>
			<button id="close_button" ><img src={cross} onClick={() => { toggleFullscreenFunction(false) } } /></button>
		</div>
	)
}

export default ScreenshotOverlay;