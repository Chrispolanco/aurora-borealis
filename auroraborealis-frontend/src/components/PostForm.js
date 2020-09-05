import React, { Component } from 'react'; 
import uuid from 'uuid'; 
import { connect } from 'react-redux'; 

class PostForm extends Component {
    state = {
        image: '', 
        description: '', 
        latitude: '', 
        longitude: '', 
        date: '' 
    }

    handleOnChange(event) {
        const {value, name} = event.target; 
        this.setState({
            [name]: value 
        })
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
        const post = {...this.state, id:uuid()}; 
        this.props.addPost(post)
        this.setState({
            image: '', 
            description: '', 
            latitude: '', 
            longitude: '', 
            date: ''
        })
    }

    render() {
        <div className="container"> 
            <form className="form" onSubmit={(event) => this.handleOnSubmit}> 
                <label htmlFor="image" class="innerForm">Image</label>
                <input type="text" name="image" onChange={(event) => this.handleOnChange(event)} value={this.state.image}/> 
                <br/> 
                <label htmlFor="description" class="innerForm">Description</label>
                <input type="text" name="description" onChange={(event) => this.handleOnChange(event)} value={this.state.description}/> 
                <br/> 
                <label htmlFor="latitude" class="innerForm">Latitude</label>
                <input type="float" name="latitude" onChange={(event) => this.handleOnChange(event)} value={this.state.latitude}/> 
                <br/> 
                <label htmlFor="longitude" class="innerForm">Longitude</label>
                <input type="float" name="longitude" onChange={(event) => this.handleOnChange(event)} value={this.state.longitude}/> 
                <br/> 
                <label htmlFor="date" class="innerForm">Date</label>
                <input type="date" name="date" onChange={(event) => this.handleOnChange(event)} value={this.state.date}/> 
                <br/> 
            <button type="submit" className="button">Submit</button>
            </form>
        </div>
    }

}

export default connect(null, {addPost } )(PostFrom); 