import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { HomeView } from './BoardPage.jsx';
import { CatalogView, ProductView } from './BoardPage.jsx';
import { NestedView } from './BoardPage.jsx';
import { NavBar } from './BoardPage.jsx';

// import BoardPage from './BoardPage.jsx'
// import Home from './components/Home.jsx';

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       boards: [1,2,3,4]
//     }
//   }
//   render(){
//     return (
//       <div>
//         <div>Wupuss Clan</div>
//         <Router>
//           <div>
//             <Route exact path="/" render={() => <Home/>} />
//             {/* <Route path="/BoardPage" render={()=><BoardPage boards={this.state.boards} />}/> */}
//             {/* <Route path="/BoardPage" component = {<BoardPage boards={this.state.boards} />}/> */}
//             <Route path="/BoardPage" component={BoardPage} />

//           </div>
//         </Router>
//       </div>
//     )
//   }
// }

// ------------------------------------TUTORIAL EXAMPLE --------------------------------

// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/BoardPage">BoardPage</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/BoardPage" component={BoardPage} />
//     </div>
//   </Router>
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );


// const BoardPage = ({ match }) => 
// (
//   <div>
//     {console.log(match.url)}
//     <h2>BoardPage</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>
//     <Route path={`${match.url}/:topicId`} component={Board} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a Board.</h3>}
//     />
//   </div>
// );

// const Board = ({ match }) => 

// (
//   <div>
//     {console.log(match.url)}
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// -------------------------------------------DIFFERENT EXAMPLE ---------------------------


//using this example: https://stackblitz.com/edit/react-router-dom-4-nested-example?file=shared%2FNavBar.js
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomeView} />
          <Route path="/another" component={() => <div>yo!</div>} />
          <Route path="/catalog" component={CatalogView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/nested" component={NestedView} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;