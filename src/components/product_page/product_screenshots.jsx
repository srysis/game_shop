import React from 'react';

import Screenshot from "./screenshot.jsx"


// !! STARTING INDEX IS CONSIDERED AS 1 IN THIS COMPONENT

function ProductScreenshots( {image_list, toggleFullscreenFunction, setCurrentImageFunction, setCurrentImageIndexFunction} ) {
	// a state that is used to force a component re-render
	// for some reason React doesn't call a re-render after state change, so this workaround was implemented
	const [, forceUpdate] = React.useReducer(x => x + 1, 0);

	const image_paths = Object.values(image_list);

	// create a clone of initial array of images paths and store it into a temporary array for modifications
	// it was done because attempting to simply assign an existing array to an empty one to create a copy, 
	// modifying a copy would also change the original array, hence why it is required to make a clone and not a copy
	let cloned_image_array = structuredClone(image_paths);

	// remove all elements for new array after a certain index (3, in this case)
	cloned_image_array.length = 3;

	// 'current_images' array will store paths that are currently rendered
	// it's elements will change after every call of 'goToLeft()' or 'goToRight()' functions
	// initially, it stores first 3 paths of 'image_list', so that only they are shown on a page
	const [current_images, setCurrentImages] = React.useState(cloned_image_array);


	// to properly define which images should render next and which shouldn't,
	// we need to keep track of which image is currently on the left end, and which is on the right end
	const [image_index_to_left, setImageIndexToLeft] = React.useState(1);
	const [image_index_to_right, setImageIndexToRight] = React.useState(cloned_image_array.length)


	// goToLeft() and goToRight() functions will calculate index values that should come next
	// so they will pull out the required path from 'image_paths' array and put it into a 'current_images' array

	function goToLeft() {
		let result_array = current_images;

		result_array.pop();
		
		// these vars will be used as a temp storage for next index value for each end
		let next_image_index_to_left = image_index_to_left;
		let next_image_index_to_right = image_index_to_right;

		// subtract 1 from each index value
		next_image_index_to_left--;
		next_image_index_to_right--;

		// check if index value for left end will become less than 1
		// if it will - reset it to the length value of array that stores paths to images
		// aka last element index
		if (next_image_index_to_left < 1) {
			next_image_index_to_left = image_paths.length;
		}

		// same method for index value for right end
		if (next_image_index_to_right < 1) {
			next_image_index_to_right = image_paths.length;
		}

		// update both index values in states
		setImageIndexToLeft(next_image_index_to_left);
		setImageIndexToRight(next_image_index_to_right);

		// pull the string, positioned at required index, out of the array 
		// and put it at the beginning of the array that will be assigned to state array
		result_array.unshift(image_paths[next_image_index_to_left - 1]);

		// update array that stores paths to images that should be rendered
		setCurrentImages(result_array);

		// force re-render in order to render new images
		forceUpdate();
	}

	function goToRight() {
		let result_array = current_images;

		result_array.shift();
		
		// these vars will be used as a temp storage for next index value for each end
		let next_image_index_to_left = image_index_to_left;
		let next_image_index_to_right = image_index_to_right;

		// add 1 from each index value
		next_image_index_to_left++;
		next_image_index_to_right++;


		// check if index value for left end will go out of bounds
		// if it will - reset it to 1, aka first element index
		if (next_image_index_to_left > image_paths.length) {
			next_image_index_to_left = 1;
		}

		// same method for index value for right end
		if (next_image_index_to_right > image_paths.length) {
			next_image_index_to_right = 1;
		}

		// update both index values in states
		setImageIndexToLeft(next_image_index_to_left);
		setImageIndexToRight(next_image_index_to_right);


		// pull the string, positioned at required index, out of the array 
		// and put it at the end of the array that will be assigned to state array
		result_array.push(image_paths[next_image_index_to_right - 1]);

		// update array that stores paths to images that should be rendered
		setCurrentImages(result_array);

		// force re-render in order to render new images
		forceUpdate();
	}

	return(
		<div className="product_screenshots">
			<div className="left_button" onClick={ () => { goToLeft(); } } >&lt;</div>
				{current_images.map((image, index) => 
					{
						return <Screenshot 
									key={index + 1} 
									image_src={image} 
									onClickHandler={ () => { 
											toggleFullscreenFunction(true); 
											setCurrentImageFunction(image);  
											console.log('toggle on'); 
										} 
									} 
								/>
					}
				)}
			<div className="right_button" onClick={ () => { goToRight(); } } >&gt;</div>
		</div>
	)
}

export default ProductScreenshots;