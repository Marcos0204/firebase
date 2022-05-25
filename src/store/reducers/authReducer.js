import { Types } from "../types/Types";

const initialState = {
    isAuth: false,
    user: {}
}

export const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case Types.uiOpenModal :
            return {
                ...state,
                openModal: true
            }
        case Types.uiCloseModal :
            return {
                ...state,
                openModal: false
            }
    
        default:
            return state;
    }
}