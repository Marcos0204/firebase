import { Types } from "../types/Types"

export const AuthAction = (object) =>{
    return {
        type: Types.authUser ,
        payload: object
    }
}