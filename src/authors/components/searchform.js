import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state={
            searchVal:""
        }
    }
    updateInputValue = (evt) => {
        console.log(evt.target.value)
        this.setState({ searchVal: evt.target.value });
    }
    search = () => {
           this.props.searchAthors(this.state.searchVal);
    }
    showAllBooks = () => {
        this.props.getAuthors();                
    }
    showSubmitBtn() {
        if(this.state.searchVal===""){
            return(
                <button className="btn btn-default search_btn" onClick={this.showAllBooks}>
                    <i className="glyphicon glyphicon-search"></i>
                </button>
            )
        }
        else
        {
            return(
                <button className="btn btn-default search_btn" onClick={this.search}>
                    <i className="glyphicon glyphicon-search"></i>
                </button>
            )
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className="input-group">
                <input type="text" onChange={this.updateInputValue} className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                {this.showSubmitBtn()}
                </div>
            </div>
        )
    } 
}
export default SearchForm; 