import React from 'react';

function Screenshot( { image_src, onClickHandler } ) {

	return(
		<div className="image_container">
			<img src={`media/images/screenshots/${image_src}`} onClick={() => onClickHandler()} />
		</div>
	)
}

export default Screenshot;