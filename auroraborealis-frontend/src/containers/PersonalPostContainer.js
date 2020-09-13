import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PersonalPosts from '../components/posts/PersonalPosts'; 

class PersonalPostContainer extends Component{
    render(){
        return(
            <div className="personal_posts"> 
                <PersonalPosts posts={this.props.posts} userLoggedIn={this.props.userLoggedIn} /> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
      userLoggedIn: !!state.currentUserReducer
    })
}

export default connect(mapStateToProps)(PersonalPostContainer)
  