import React from 'react';

import Image from "./Image.jsx"

function ProductScreenshots( {image_list} ) {
	// a state that is used to force a component re-render
	// for some reason React doesn't call a re-render after state change, so this workaround was implemented
	const [, forceUpdate] = React.useReducer(x => x + 1, 0);

	const image_paths = Object.values(image_list);

	// create a clone of initial array of images paths and store it into a temporary array for modification
	// it was done because attempting to simply assing an existing to an empty one to create a copy, modifying a copy
	// will also change the original object, hence why it is required to make a clone and not a copy
	let cloned_image_array = structuredClone(image_paths);

	// changing a length of array will remove all elements index of which is bigger than "given length value + 1"
	cloned_image_array.length = 3;

	const [current_images, set_current_images] = React.useState(cloned_image_array);

	// this variable will store an array with paths to images that should be rendered on page
	let images_to_render = current_images;

	// since there are only 3 images that need to be rendered,
	// set the last image index as 3, so switching will work from the 3rd image
	const [image_index, set_image_index] = React.useState(3);

	function goToLeft() {
		// to determine which image will be next in order, this variable will be used
		// to store the value of potential index that will be used to pull the right path
		// from list of image paths
		let current_image_index = image_index;

		// make a copy of array in a state to avoid modifying states directly
		let result_array = current_images;

		result_array.pop();

		// decrement potential index value by 1
		current_image_index--;

		// check potential index value to decide whether the index should be reset or not
		// reset if index value becomes negative, do not reset if it does not
		if (current_image_index < 0) {
			current_image_index = image_paths.length - 1;
			set_image_index(current_image_index);
		} else {
			set_image_index(current_image_index);
		}

		result_array.unshift(image_paths[image_index]);
		set_current_images(result_array);

		forceUpdate();
	}

	function goToRight() {
		// to determine which image will be previous in order, this variable will be used
		// to store the value of potential index that will be used to pull the right path
		// from list of image paths
		let current_image_index = image_index;

		// make a copy of array in a state to avoid modifying states directly
		let result_array = current_images;

		result_array.shift();

		// increment potential index value by 1
		current_image_index++;

		// check potential index value to decide whether the index should be reset or not
		// reset if index value goes out of bounds, do not reset if it does not
		if (current_image_index > image_paths.length - 1) {
			current_image_index = 0;
			set_image_index(current_image_index);
		} else {
			set_image_index(current_image_index);
		}

		result_array.push(image_paths[image_index]);
		set_current_images(result_array);

		forceUpdate();
	}

	return(
		<div className="product_screenshots">
			<div className="left_button" onClick={ () => { goToLeft(); } } >&lt;</div>
				{images_to_render.map((image, index) => 
					{
						return <Image key={index + 1} image_src={image} />
					}
				)}
			<div className="right_button" onClick={ () => { goToRight(); } } >&gt;</div>
		</div>
	)
}

export default ProductScreenshots;