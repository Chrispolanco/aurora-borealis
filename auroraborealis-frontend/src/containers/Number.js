// import React, { Component } from 'react'; 
// import './../App.css';

// class Number extends Component{

//     state = {
//         count: 0
//     }
    
        // console.log('a')

        // fetch ("https://auroraborealis-api.herokuapp.com/posts", {
        //     credentials: "include", 
        //     method: "GET", 
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(resp => {
                // if(resp.status !== 200) {
                //     throw new Error(resp.statusText);
                // }
        //         console.log('b', resp)
        //         return resp.json();
        //     })
        //     .then(data => console.log('c', data))
        //     .catch(errors => console.log('d', errors))

        // console.log('e');

        // a, e, d
    //   }

//     increment = () => {
//         const updatedCount = this.state.count + 1
//         this.setState({
//           count: updatedCount
//         })
//     }


//     deduction = () => {
//         const updatedCount = this.state.count - 1
//         this.setState({
//             count: updatedCount
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <button className="CounterButton" onClick={this.increment}> 
//                     Click Me Increase!!
//                 </button>
//                 <button className="CounterButton" onClick={this.deduction} >
//                     Click Me Decrease!!
//                 </button>
//                 <div className="Number" >
//                     {this.state.count}
//                 </div>
//             </div>
//         )
//     }


// }

// export default Number