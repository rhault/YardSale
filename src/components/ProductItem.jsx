import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/appContext';

const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const haddleClick = item => {
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price},00</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => haddleClick(product)}>
					<img src={addCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
