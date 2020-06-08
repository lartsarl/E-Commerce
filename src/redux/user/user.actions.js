<<<<<<< HEAD
import {UserActionTypes} from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
=======
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
>>>>>>> refs/remotes/origin/master
    payload: user
})