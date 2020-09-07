import React, { Component } from 'react'; 

class PostFrom extends Component {
    state = {
        image: '', 
        description: '', 
        latitude: '', 
        longitude: '', 
        date: '' 
    }

    handleOnChange(e) {
        const {value, name} = e.target; 
        this.setState({
            [name]: value 
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault(); 
        // const post = {...this.state, userId: this.props.userId}; 
        this.props.addPost({
            description: this.state.description, 
            userId: this.props.user_id, 
        })
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
        )
    }

}

export default PostFrom; 