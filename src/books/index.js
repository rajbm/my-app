import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getBooks, searchBooks, searchBooksAuthors, searchAuthorBooks, deleteBook} from './action';
// import { NavLink } from 'react-router-dom';
import  BooksTable from './components/booktable.js'
import  SearchForm from './components/searchform.js'
import AutorList from './components/authorlist'

class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
 
  render() {
    return (
		<div className="container">
			<div className="well">
				<div className="row">
					<div className="col-md-8"> 
						<h3>
						<strong>Books 
							<span className="badge">{this.props.books.length} </span>
						</strong>
						</h3>
					</div>
					<div className="col-md-4">
						<SearchForm searchBooks={this.props.searchBooks} getBooks={this.props.getBooks}/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-3"> 
					<h4 className="list_heading" >Authors<span className="badge">{this.props.authors.length}</span></h4>
					<SearchForm searchBooks={this.props.searchBooksAuthors} getBooks={this.props.getBooks}/>
					<br/>
					<AutorList authors={this.props.authors} searchAuthorBooks={this.props.searchAuthorBooks}/>
				</div>
				<div className="col-md-9" ><BooksTable books={this.props.books} deleteBook={this.props.deleteBook}/></div>
			</div>
		</div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.books.books,
    authors: state.books.authors
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBooks, searchBooks, searchBooksAuthors, searchAuthorBooks,deleteBook},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
