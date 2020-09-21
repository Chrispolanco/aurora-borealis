function currentUserReducer(state=null, action) {
    switch (action.type) {
        case 'CURRENT_USER':
            console.log("Set Current User") 
            return action.user 

        case 'REMOVE_USER': 
            console.log("Removed User")
            return null
        
        default: 
            console.log("Default")
            return state; 
    }
}

export default currentUserReducer; 