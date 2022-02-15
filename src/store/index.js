import { createStore } from "redux";

const INITIAL_STATE = {
    userEmail: {},
    userPassword: {}
}; 

function reducer(state = INITIAL_STATE, action) {
    console.log("Aguardando Login")

    if(action.type === 'USER_LOGIN') {
        return { 
            ...state, 
            userEmail: action.email, 
            userPassword: action.password
            
        }
    }

return state;
}

const store = createStore(reducer);

export default store;