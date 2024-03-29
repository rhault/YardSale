import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';
import AppContext from '@context/appContext'

const OrderItem = () => {
	const {state} = useContext(AppContext);
	console.log(state.cart)
	return (
		<>
		{state.cart.map(iten => (
			<div className="OrderItem" key={iten.id}>
			<figure>
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={closeIcon} alt="close" />
		</div>
		))}
		</>
	);
}

export default OrderItem;
