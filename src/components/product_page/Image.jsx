import React from 'react';

function Image( { image_src } ) {

	return(
		<div className="image_container">
			<img src={`media/images/screenshots/${image_src}`}/>
		</div>
	)
}

export default Image;