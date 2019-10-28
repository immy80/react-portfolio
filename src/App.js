import React from 'react';
import './App.css';
//import './myDetails.css';

import Sidebar from './components/sidebar';
import Details from './components/myDetails';

class App extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Sidebar/>
        <div className="support"></div>
        <div className="bodyContainer">
        <Details/>
            {/* <p>I enjoy building projects in many different software languages. I've built websites, corporate software and even games! If you are interested, you can view some of my favorite projects in my portfolio down below.</p> */}

      
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="entirePage">
//       <div className="topNav">
//           <Navbar />
//       </div>
//       <div className="mainBody">
//         <div className="feed">
//           <Feed />
//         </div>
//         <div className="sideBar">
//           <Stories />
//         </div>
//       </div>
//       <div className="footer">
//           <Footer />
//       </div>
//     </div>
//   )
// }
