import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addComment } from '../../actions/comments'; 

class CommentForm extends Component {

    constructor(props){
        super(props); 
        this.state={
            context: '', 
            user_id: this.props.userLoggedIn.id, 
            post_id: this.props.post.id 
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); 
        this.props.addComment(this.state)
        this.setState({
            context: ''
        })
    }

    render() {
        return(
            <div className="EnterCommentContainer"> 
                <form onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="context" className="EnterComment">Enter Comment</label>
                    <textarea className="TextAreaComment" type="text" name="context" onChange={this.handleOnChange} value={this.state.context}/> 
                <button type="submit" className="button">Submit</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { addComment })(CommentForm)