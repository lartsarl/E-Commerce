<<<<<<< HEAD
import {UserActionTypes} from './user.types';

=======
>>>>>>> refs/remotes/origin/master
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
<<<<<<< HEAD
        case UserActionTypes.SET_CURRENT_USER:
=======
        case 'SET_CURRENT_USER':
>>>>>>> refs/remotes/origin/master
            return {
                ...state, currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;