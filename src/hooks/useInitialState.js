import React, { useState } from 'react';

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
        console.log('are ok')
    }

    return {
        state,
        addToCart
    }
}

export default useInitialState;