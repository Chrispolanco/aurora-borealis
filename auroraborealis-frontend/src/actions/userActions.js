export const loginUser = (user) => {
    return(dispatch) => {
        dispatch({ type: "LOADING" })
        fetch("http://localhost:3000/login", {
            method: 'POST', 
            headers: {
                "Content-Type" : "application/json"
            }, 
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(res => res.json())    
        .then(data => {
            if(data.error) {
                dispatch({ type: "LOGIN_ERROR", error: data.error })
            } else {
                dispatch({ type: "LOGIN_USER", user: data })
            }
        })
    }
}