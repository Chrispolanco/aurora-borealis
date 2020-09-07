export const currentUser = user => {
    return {
        type: "CURRENT_USER", 
        user 
    }
}

export const blankCurrentUser = () => {
    return {
        type: "Blank_USER"
    }
}

export const signup = (credentials) => {
    return(dispatch) => {
        return fetch()
    }
}