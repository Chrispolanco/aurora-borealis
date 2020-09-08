function currentUserReducer(state=null, action) {
    switch (action.type) {
        case 'CURRENT_USER':
            console.log("1") 
            return action.user 

        case 'REMOVE_USER': 
            console.log("2")
            return state
        
        default: 
            console.log("3")
            return state; 
    }
}

export default currentUserReducer; 