import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showBook } from './action';
import { NavLink } from 'react-router-dom'

class Book extends Component {
  componentDidMount() {
    this.props.showBook(this.props.match.params.id);
  }
  goBack = () => {
    this.props.history.goBack()
  }
  render() {
    // console.log();
    return (
      <div className="container" >
        <div className="row" >
        <div className="col-md-4" ></div>
        <div className="col-md-4" >
          <div className="panel panel-primary">
            <div className="panel-heading"><b>{this.props.author.name}</b></div>
            <div className="panel-body">{this.props.author.description}</div>
          </div>
          <div className="text-center">
            <button className="btn btn-warning btn-md" onClick={this.goBack} >
              <span className="glyphicon glyphicon-arrow-left"></span> Go back
            </button>
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
