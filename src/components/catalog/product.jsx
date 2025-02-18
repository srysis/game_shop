import React from 'react';
import ReactDOM from 'react-dom/client';

import "../../style/catalog/product/product.scss"

class Product extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="product">
				<div className="overlay"></div>
				<div className="box_art">
					<img src={this.props.boxArt} />
				</div>
				<div className="title">
					<h2>{this.props.title}</h2>
				</div>
				<div className="info">
					<div className="price"><p>{this.props.price}</p></div>
					<button type="button" className="details">View details</button>
				</div>
			</div>
		)
	}
}

export default Product;