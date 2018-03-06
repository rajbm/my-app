import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showBook } from './action';
import { NavLink } from 'react-router-dom'

class Book extends Component {
  componentDidMount() {
    this.props.showBook(this.props.match.params.id);
  }
  render() {
    // console.log(this.props.match.params.id);
    return (
      // <div className="App">
      // <div>show page</div>
      // <NavLink to="/">home</NavLink>
      //   <h3>{this.props.author.page_count}</h3>
      //   <h3>{this.props.author.name}</h3>
      //   <p>{this.props.author.description}</p>
      // </div>
      <div className="container" >
        <div className="row" >
        <div className="col-md-4" ></div>
        <div className="col-md-4" >
          <div className="panel panel-primary">
            <div className="panel-heading"><b>{this.props.author.name}</b></div>
            <div className="panel-body">{this.props.author.description}</div>
          </div>
        </div>
        <div className="col-md-4" ></div>
        </div>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    author: state.books.author
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showBook },dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Book);
