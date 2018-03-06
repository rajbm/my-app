import React, { Component } from 'react';

class NewBookForm extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
            book:{
                name:"",page_count: 0,description:"",date_of_publish:""
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
        this.setState({ author });
    }
    createBook=()=>{
        // this.props.createBook(this.state.book)
    }
    

    showNewForm() {

            return(
                <div className="row animated flipInX" id="new_form">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input type="text" name="name" value={this.state.book.name} onChange={this.updateInputValue} className="form-control" placeholder="Enter name."/>
                        </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="form-group">
                            <input type="number" name="page_count" value={this.state.book.page_count} onChange={this.updateInputValue} className="form-control" placeholder="Enter email."/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input type="text" name="description" value={this.state.book.description} onChange={this.updateInputValue} className="form-control" placeholder="Enter phone no."/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="date" name="date_of_publish" value={this.state.book.date_of_publish} onChange={this.updateInputValue} className="form-control" placeholder="Enter country."/>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={this.createBook} >
                                Add
                            </button> 
                        </div>
                    </div>
                </div> 
            )
    }
   
    render() {
        // console.log(this.props.createAuthor())
        return (
            <div>
                <br/>
                {this.showNewForm()}
            </div>
            
            
        )
    } 
}
export default NewBookForm; 