const userReducer = (state={user: {}, loggedIn: false, loading:false}, action ) => {
    switch(action.type) {
        case 'LOGIN_USER': 
            return {user: action.user, loggedIn: true, loading: false}

        case 'LOADING': 
            return {...state, loading: true}

        default: 
            return state; 
    }
}

export default userReducer