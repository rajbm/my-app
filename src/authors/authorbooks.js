import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAuthorBooks } from './action';
import AuthorBooksCard from './components/authorbookscard'
class AuthorBooks extends Component {
    
    componentDidMount() {
        this.props.getAuthorBooks(this.props.match.params.id)
    }

    render() {
        console.log(this.props.authorBooks)
        return (
            <AuthorBooksCard />
        )
    } 
}



function mapStateToProps(state) {
    console.log(state);
    return {
      authorBooks: state.authors.authorBooks
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAuthorBooks},dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(AuthorBooks);