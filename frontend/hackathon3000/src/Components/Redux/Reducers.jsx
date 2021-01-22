import {combineReducers} from 'redux';
import {USER_IDENTIFIED} from './Actions'

//Reducers definition


const initialState = {
    user:"",
};

const addUserToSessionStorage = user => sessionStorage.setItem("id",user);

const HackReducers = (state = initialState, action) => {
    switch (action.type) {

        case USER_IDENTIFIED:
            addUserToSessionStorage(action.user)
            return {...state, user:action.user}

        default:
            return state
    }
}

const Reducers = combineReducers({
    hackReducers: HackReducers,
  });

export default Reducers
