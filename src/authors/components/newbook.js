import React, { Component } from 'react';
import { withRouter } from 'react-router'
class NewBookForm extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
            book:{
                name:"",description:"",author_id:this.props.author.id
            }
        }
    }

    toggleNewForm=()=>{
        this.setState({showForm: !this.state.showForm})
    }
    updateInputValue = (event) => {
        console.log(event.target.name)
        let book = this.state.book;
        book[event.target.name]=event.target.value;
        console.log(book)
        this.setState({ book });
    }
    addBook=()=>{
        this.props.addBook(this.state.book, this.props.history)
    }
    hideBookform=()=>{
        this.props.hideBookform()
    }
    

    showNewForm() {

            return(
                <div id="book_form">
                <div className="formOverlay animated fadeIn" ></div>
                <div className="animated bounceIn" id="new_book_form">
                    <h4 className="heading" >Add new book to <strong> {this.props.author.name}</strong></h4>
                    <span className="glyphicon glyphicon-remove close-form-icon" onClick={this.hideBookform} ></span>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="name" value={this.state.book.name} onChange={this.updateInputValue} className="form-control" placeholder="Enter name."/>
                            </div>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="language" value={this.state.book.language} onChange={this.updateInputValue} className="form-control" placeholder="Enter language."/>
                            </div>
                        </div> */}
                    </div>
                    <br/>
                    <div className="row">
                        {/* <div className="col-md-6"> 
                            <div className="form-group">
                                <input type="number" name="page_count" value={this.state.book.page_count} onChange={this.updateInputValue} className="form-control" placeholder="Enter no of pages."/>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <input type="datetime-local" name="date_of_publish" value={this.state.book.date_of_publish} onChange={this.updateInputValue} className="form-control" placeholder="Enter date of publish."/>
                            </div>
                        </div> */}
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea type="text" name="description" value={this.state.book.description} onChange={this.updateInputValue} rows="5" className="form-control" placeholder="Enter description."/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row" >
                        <div className="col-md-3">
                            <div className="form-group">
                                <button className="btn btn-success btn-block" onClick={this.addBook} >
                                    <span className="glyphicon glyphicon-plus" onClick={this.hideBookform} ></span> Add Book
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
   
    render() {
        // console.log(this.props.author)
        return (
            <div>
                <br/>
                {this.showNewForm()}
            </div>
            
            
        )
    } 
}
const NewBookFormWithRouter = withRouter(NewBookForm)
export default NewBookFormWithRouter; 