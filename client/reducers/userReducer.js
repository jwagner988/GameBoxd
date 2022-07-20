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
        // case types.SUBMIT_USER: {
        //     return {
        //         ...state,
        //         ...action.payload
        //     }
        // }
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

            console.log('data in reducer', data)
            if(!data.isAuthenticated) {
                window.alert('user data corrupted, please try again')
                return
            }
            dispatch({type: types.VERIFY_USER, payload: data})
            navigate('/')
        })
        .catch((err) => {
            console.log('err', err)
        })
    }
}

// export const submitUser = (signUpInfo, navigate) => {
//     return (dispatch) => {
//         fetch('/auth/signUp', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json',
//             },
//             body: JSON.stringify(signUpInfo)
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('ret from fetch', data)
//             dispatch({type: types.SUBMIT_USER, payload:data})
//             navigate('/')
//         })
//         .catch((err) => {
//             console.log('err', err)
//         })
//     }
// }