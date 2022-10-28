import { 
    SIDEBAR_SET 
} from "../types/app.types";

const initialState = {
    sidebarShow: true,
  }

export function appState(state = initialState, action) 
{
    switch (action.type) {
        case SIDEBAR_SET:
            if(typeof action.payload == 'object'){
                return {...state, ...action.payload}
            } else return {...state, sidebarShow: action.payload};
        default:
            return { ...state };
    }
}
