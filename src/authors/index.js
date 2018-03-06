import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getAuthors, searchAthors, createAuthor, addBook, deleteAuthor} from './action';
// import { NavLink } from 'react-router-dom';
import  AthorsTable from './components/authorstable.js'
import  SearchForm from './components/searchform.js'
import  NewBookForm from './components/newbook.js'

import NewAuthorForm from './new.js'

class Authors extends Component {
  componentDidMount() {
    this.props.getAuthors();
  }
 
  render() {
    console.log(this.props)
    return (
      <div className="container">
      <div className="row">
      </div>
      <NewAuthorForm createAuthor={this.props.createAuthor} />
      
      <br/>
      {/* <NewBookForm /> */}
        <div className="well">
          <div className="row">
              <div className="col-md-8"> <h3><strong>Authors</strong>
              <span className="badge">{this.props.authors.length} </span>
              </h3></div>
              <div className="col-md-4">
                <SearchForm getAuthors={this.props.getAuthors} searchAthors={this.props.searchAthors}/>
              </div>
          </div>
        </div>
        <AthorsTable authors={this.props.authors} addBook={this.props.addBook} deleteAuthor={this.props.deleteAuthor} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    authors: state.authors.authors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getAuthors, searchAthors, createAuthor, addBook, deleteAuthor},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Authors);
