import React from 'react';

function Screenshot( { image_src, data_index, onClickHandler } ) {

	return(
		<div className="image_container">
			<img src={`/media/images/screenshots/${image_src}`} data-index={data_index} onClick={() => onClickHandler()} />
		</div>
	)
}

export default Screenshot;