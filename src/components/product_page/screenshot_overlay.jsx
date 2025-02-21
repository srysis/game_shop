import React from 'react';

import cross from "../../files/cross.svg"

function ScreenshotOverlay( {image_list, image, current_image_index, toggleFullscreenFunction} ) {

	const image_paths = Object.values(image_list);

	return(
		<div id="image_fullscreen_overlay_container">
			<button id="prev_image" onClick={() => console.log("left")} >&lt;</button> 
			<img className="image_fullscreen" src={`media/images/screenshots/${image}`} alt="" />
			<button id="next_image" onClick={() => console.log("right")} >&gt;</button>
			<button id="close_button" ><img src={cross} onClick={() => { toggleFullscreenFunction(false); console.log('toggle off'); } } /></button>
		</div>
	)
}

export default ScreenshotOverlay;