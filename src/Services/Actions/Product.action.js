import api from '../../Axios/Api'
import { GET_PRODUCT } from '../Constants/Action.type'

export const getProduct = (data) => {
    return{
        type : GET_PRODUCT,
        payload : data
    }
}

export const getProductAsync = () => {

    return async dispatch => {
        await api.get("/product").then((res) => {
            console.log("res",res);
            dispatch(getProduct(res.data))
        }).catch((err) => {
            console.log(err,"err");
        })
    }
}