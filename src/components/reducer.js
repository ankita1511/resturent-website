const initialState = {
    cartData: [],
    cartCount:0

}

function cartItems(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData,action.payload],
                cartCount:state.cartCount+1
            }
            case "REMOVE-FROM-CART":
                return{
                    ...state,
                    cartData:state.cartData.filter((menu)=>menu !== action.payload),
                    cartCount:state.cartCount-1
                }
        default:
            return state
    }

}

export default cartItems