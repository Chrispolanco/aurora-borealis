import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { createPost } from '../../actions/posts'; 

class PostForm extends Component {

    constructor(props){
        super(props); 
        this.state = {
            image: '', 
            description: '', 
            latitude: '', 
            longitude: '', 
            date: '', 
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
            image: '', 
            description: '', 
            latitude: '', 
            longitude: '', 
            date: ''
        })
    }

    render() {
        return(
            <div className="container"> 
                <form className="form" onSubmit={this.handleOnSubmit}> 
                    <label htmlFor="image" className="innerForm">Image</label>
                    <input type="text" name="image" onChange={this.handleOnChange} value={this.state.image}/> 
                    <br/> 
                    <label htmlFor="description" className="innerForm">Description</label>
                    <input type="text" name="description" onChange={this.handleOnChange}  value={this.state.description}/> 
                    <br/> 
                    <label htmlFor="latitude" className="innerForm">Latitude</label>
                    <input type="float" name="latitude" onChange={this.handleOnChange} value={this.state.latitude}/> 
                    <br/> 
                    <label htmlFor="longitude" className="innerForm">Longitude</label>
                    <input type="float" name="longitude" onChange={this.handleOnChange}  value={this.state.longitude}/> 
                    <br/> 
                    <label htmlFor="date" className="innerForm">Date</label>
                    <input type="date" name="date" onChange={this.handleOnChange}  value={this.state.date}/> 
                    <br/> 
                <button type="submit" className="button">Submit</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { createPost })(PostForm)