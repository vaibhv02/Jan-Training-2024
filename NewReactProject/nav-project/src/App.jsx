// import DynamicComp from "./assets/components/DynamicComp";
// import Goal, { DidNotGoal, MadeGoal } from "./assets/components/Goal";
// import Navbar from "./assets/components/Navbar/Navbar";
// import Props from "./assets/components/Props";


// function App() {
//   return(
//     <div className="App">
//       <Props/>
//     </div>
    
//   )
// }
// export default App;


// import React, { Component } from 'react';
// import Props2 from './assets/components/Props2';

// class App extends Component {
//     render() {
//         const person = {
//             name: 'Vaibhv Sharma',
//             age: 24,
//         };

//         return (
//             <div>
//                 <Props2 person={person} />
//             </div>
//         );
//     }
// }


import Count from "./assets/components/Count";
import FunctionComp from "./assets/components/FunctionComp";
import Initialization from "./assets/components/Initialization";
import ReadOnlyStateExample from "./assets/components/ReadOnlyStateExample";
import ReadStateExample from "./assets/components/ReadStateExample";
import SetSimpleExample from "./assets/components/SetSimpleExample";


function App() {
      return(
        <div className="App">
          {/* <FunctionComp/> */}
          <Count/>
          {/* <Initialization/> */}
          {/* <SetSimpleExample/> */}
          <ReadStateExample/>
          <ReadOnlyStateExample/>
        </div>
        
      )
    }

export default App;