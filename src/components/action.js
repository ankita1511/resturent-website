const addToCart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

const removeFromCart=(data)=>{
    return{
        type:"REMOVE-FROM-CART",
        payload:data
    }
}

export {addToCart, removeFromCart}