import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PostForm from '../components/posts/PostForm'; 

class CreatePostContainer extends Component{
    render(){
        return(
            <div> 
                <PostForm userLoggedIn={this.props.userLoggedIn} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        userLoggedIn: state.currentUserReducer
    })
}

export default connect(mapStateToProps)(CreatePostContainer)