function currentUserReducer(state=null, action) {
    switch (action.type) {
        case 'CURRENT_USER': 
            return action.user 

        case 'REMOVE_USER': 
            return state
        
        default: 
            return state; 
    }
}

export default currentUserReducer; 