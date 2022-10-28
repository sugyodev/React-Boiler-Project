import { 
    SIDEBAR_SET 
} from "../types/app.types";

export const ctrlSidebar  = (set_state) => dispatch =>
{
    dispatch({
        type: SIDEBAR_SET,
        payload: set_state
    })
}

