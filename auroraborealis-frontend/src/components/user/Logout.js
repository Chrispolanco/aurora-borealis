import React from 'react'; 
import { connect } from 'react-redux'; 
import { logout } from '../../actions/user'; 
import { withRouter } from 'react-router-dom'; 

const Logout = ({ logout, history }) => {
    return (
        <form onSubmit={(event) => { 
            event.preventDefault()
            logout()
            history.push('/createPost')
        }
    }>
            <button type="submit" className="button">Log Out</button>
        </form>
    )
}

export default withRouter(connect(null, {logout})(Logout))