import { GET_PRODUCT } from "../Constants/Action.type";

const initialState = {
    product : []
}

const productReducer = (state=initialState,action) => {

    switch(action.type){
        case GET_PRODUCT :
            return {
                ...state,
                product : action.payload
            }
            break;
        default :
            return state;
    }
}

export default productReducer;