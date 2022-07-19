import * as types from '../constants/actionTypes.js'

const initialState = {
    id: null,
    username: '',
    isAuthenticated: null,
    favorites: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case types.VERIFY_USER: {
            return {
                ...state, 
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}


export default userReducer

export const fetchUserLogin = (logInInfo, navigate) => {
    return (dispatch) => {
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(logInInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('success', data)
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
}