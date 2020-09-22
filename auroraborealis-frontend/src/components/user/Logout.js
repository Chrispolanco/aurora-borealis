import React from 'react'; 
import { connect } from 'react-redux'; 
import { logout } from '../../actions/user'; 

const Logout = ({ logout, history }) => {
    return (
        <form onSubmit={(event) => { 
            event.preventDefault()
            logout()
            history.push('/login')
        }
    }>
            <button type="submit" className="button">Log Out</button>
        </form>
    )
}

export default connect(null, {logout})(Logout)