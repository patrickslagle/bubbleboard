import React from 'react'
import { BrowserRouter as Route, Link, Router } from "react-router-dom";
// import Board from './Board.jsx'

let boardButtons;
let boardRoutes; 

// const BoardPage = ({match}) => {
//   console.log(match.url)
//   // if (props.boards){
//   //   boardButtons = props.boards.map((ele) => {
//   //     const boardPath = '/BoardPage/' + ele
//   //     return <button key={ele}><Link to={boardPath}>Board {ele}</Link></button>
//   //   })
//   //   boardRoutes = props.boards.map((ele) => {
//   //     const boardPath = '/BoardPage/' + ele
//   //     return <Route key={ele} path={boardPath} render={() => <Board key={ele}/>} />

//   //   })
//   //   console.log(boardRoutes)
//   // }



//   return (
//     <div>
//       <div>Board Page!!</div>
//       {/* {boardButtons} */}
//       <Link to={`${match.url}/components`}>Components</Link>
//       {/* <button key={5}><Link to={`${match.url}/5`}>Board 5</Link></button> */}
//       {/* <Route path="/BoardPage/5" component = {Board} /> */}
//       <Route path={`${match.url}/:topicId`} component={Board} />
//       <Route exact path={match.url}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   )
// }


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


export const Sep = () => <span> | </span>;

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link> <Sep />
      <Link to="/catalog">Catalog</Link> <Sep />
      <Link to="/another">Another</Link> <Sep />
      <Link to="/nested">Nested</Link> 
      <hr/>
    </div>
  )
}

const products = [
  { id: '1', label: 'Nutella' },
  { id: '2', label: 'Pane' },
  { id: '3', label: 'Latte' }
];

export const CatalogView = () => {
  
  return (
    <div>
      <h3>Catalog</h3>
      { products.map(({id, label}) => 
        <Link to={`/product/${id}`}>{label}<br/></Link> ) }
    </div>
  )
}


export const ProductView = ({ match }) => {
  const product = products.find(item => item.id === match.params.id);
  console.log(products, match.params.id)
  return (
    <div>
      <h3>Product ID: { match.params.id }</h3>  
      <h3>{ product.id } - { product.label }</h3>  
      <Link to={`/catalog`}>Back to catalog</Link>
    </div>
  )
}

export const HomeView = () => <div>Home</div>;

const SubView = ({ match }) => {
  console.log('starting to render subview')
  return (
  <div>
    <h3>Section: {match.params.sectionName}</h3>
  </div>
);
}

export const NestedView = ({ match }) => {
  return (
    <div>
      {/*default message*/}
      <Route exact path={match.url} render={() => (
        <h3>Please select a section:</h3>
      )}/>
      <Link to={`${match.url}/info`}>Info - </Link>
      <Link to={`${match.url}/about`}>About - </Link>
      <Link to={`${match.url}/contacts`}>Contact</Link>
      <Route path={`${match.url}/:sectionName`} component={SubView}/>
    </div>
  )
};




// export default BoardPage; 