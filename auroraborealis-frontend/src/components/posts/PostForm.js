import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { createPost } from '../../actions/posts'; 
import { withRouter } from 'react-router-dom'; 


class PostForm extends Component {

    constructor(props){
        super(props); 
        this.state = {
            location: '', 
            story: '', 
            user_id: this.props.userLoggedIn.id
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); 
        this.props.createPost(this.state)
        this.setState({
            location: '', 
            story: ''
        })
        this.props.history.push('/personalPosts')
    }

    render() {
        return(
            <div className="container"> 
                <form className="form" onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="location" className="InnerForm">Location</label>
                    <input type="text" name="location" onChange={this.handleOnChange} value={this.state.location}/> 
                    <label htmlFor="story" className="InnerForm">Story</label>
                    <textarea type="text" name="story" onChange={this.handleOnChange}  value={this.state.story}/> 
                <button type="submit" className="StoryButton">Submit Story</button>
                </form>
            </div>
        )
    }

}

export default withRouter(connect(null, { createPost })(PostForm))