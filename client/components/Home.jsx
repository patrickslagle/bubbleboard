import React from 'react';
import { BrowserRouter as  Router, Link } from "react-router-dom";


const Home = props => {
    return (
      <div>

      <button><Link to='/BoardPage'>BoardPage</Link></button>
      <div>YOU ARE ON HOME PAGE</div>

      </div>
    )
}

  export default Home