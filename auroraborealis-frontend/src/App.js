import React from 'react';
import './App.css';
import Nav from './components/user/Nav'; 
// import Background from './components/Background'; 

// import { getCurrentUser } from './actions/user'; 
// import { connect } from 'react-redux';

class App extends React.PureComponent {

//   componentDidMount() {
//     this.props.getCurrentUser()
// }

    // state = {
    //   spceImage: []
    // }

  // componentDidMount() {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then(response => response.json())
  //   .then((data) => {
  //     this.setState({ spceImage: data.hdurl })
  //   })
  // }

  render() {
    return(
      <div>
        <Nav/>
      </div>
    )
  }
}; 


// const mapStateToProps = state => {
//   return({
//     userLoggedIn: !!state.currentUserReducer
//   })
// }

// export default connect(mapStateToProps, { getCurrentUser })(App); 

export default App 

