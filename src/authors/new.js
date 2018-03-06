import React, { Component } from 'react';
import { withRouter } from 'react-router'

class NewAuthorForm extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
            author:{
                name:"",email:"",phone_number:"",country:""
            }
        }
    }

    toggleNewForm=()=>{
        this.setState({showForm: !this.state.showForm})
    }
    updateInputValue = (event) => {
        console.log(event.target.name)
        let author = this.state.author;
        author[event.target.name]=event.target.value;
        console.log(author)
        this.setState({ author });
    }
    createAuthor=()=>{
        this.props.createAuthor(this.state.author, this.props.history)
    }
    

    showNewForm() {
        if(this.state.showForm) {
            return(
                <div className="row animated flipInX" id="new_form">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input type="text" name="name" value={this.state.author.name} onChange={this.updateInputValue} className="form-control" placeholder="Enter name."/>
                        </div>
                    </div>
                    <div className="col-md-3"> 
                        <div className="form-group">
                            <input type="text" name="email" value={this.state.author.email} onChange={this.updateInputValue} className="form-control" placeholder="Enter email."/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <input type="text" name="phone_number" value={this.state.author.phone_number} onChange={this.updateInputValue} className="form-control" placeholder="Enter phone no."/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <input type="text" name="country" value={this.state.author.country} onChange={this.updateInputValue} className="form-control" placeholder="Enter country."/>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={this.createAuthor} >
                                Add
                            </button> 
                        </div>
                    </div>
                </div> 
            )
        }
    }
   
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="row">
                <div className="col-md-12" align="right">
                    <button className="btn btn-success btn-md" onClick={this.toggleNewForm} ><span className={this.state.showForm?"glyphicon glyphicon-minus":"glyphicon glyphicon-plus"}></span> {this.state.showForm?"Hide":"Author"}</button>          
                </div>
                </div>
                <br/>
                {this.showNewForm()}
            </div>
            
            
        )
    } 
}
const NewAuthorFormWithRouter= withRouter(NewAuthorForm);
export default NewAuthorFormWithRouter; 