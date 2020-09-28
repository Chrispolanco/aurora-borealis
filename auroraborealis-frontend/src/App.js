import React from 'react';
import './App.css';
import Nav from './components/user/Nav'; 

// import { getCurrentUser } from './actions/user'; 
// import { connect } from 'react-redux';

class App extends React.PureComponent {

//   componentDidMount() {
//     this.props.getCurrentUser()
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

