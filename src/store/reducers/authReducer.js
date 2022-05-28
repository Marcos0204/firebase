import { Types } from "../types/Types";

const initialState  = {
    //isAuth: JSON.parse( localStorage.getItem('isAuth')) ? true : false,
    isAuth: JSON.parse( localStorage.getItem('isAuth')) || false,
    user: JSON.parse( localStorage.getItem('user')), 
}

export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case Types.authUser :
            localStorage.setItem('user', JSON.stringify(action.payload))
            localStorage.setItem('isAuth', JSON.stringify(true))
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
    
        default:
            return state;
    }
}