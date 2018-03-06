import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './common/Navbar.js';
import Loader from './common/loader'

import Books from './books';
import Book from './books/show';

import Authors from './authors';
import authorbooks from './authors/authorbooks'




 
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <section className="animated fadeIn">
        <Loader />
       
        <NavBar />
      <Route path="/"  exact component={Books} />
      <Route path="/books/:id"  exact component={Book} />
      <Route path="/authors" exact component={Authors} />
      <Route path="/author/:id/books" exact component={authorbooks} />
      
      
      </section>
      
    </Router>
  </Provider>
)
 
// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }
//  
export default Root