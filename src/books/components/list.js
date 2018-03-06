import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  NewBookForm from '../../authors/components/newbook.js'
import { withRouter } from 'react-router'

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            showForm:false,
        }
    }

    showBookform=()=>{
        this.setState({showForm: true})
    }

    hideBookform=()=>{
        this.setState({showForm: false})
    }
    
    searchAuthor(id){
        this.props.searchAuthorBooks(id)
    }
    
    render() {
        console.log(this.props)
        return (
                // <tr>
                //     <td>{this.props.author.name}</td>
                //     <td>{this.props.author.email}</td>
                //     <td>{this.props.author.phone_number}</td>
                //     <td>{this.props.author.country}</td>                
                //     <td className="text-center">
                //         <button className="btn btn-success btn-xs" onClick={this.showBookform} ><span className="glyphicon glyphicon-plus"></span> Add Book</button>
                //         {this.state.showForm?<NewBookForm hideBookform={this.hideBookform} author={this.props.author} addBook={this.props.addBook} />:""}                        
                //         </td>
                //     <td className="text-center">
                //         <NavLink to={"/author/"+this.props.author.id+"/books"} className="btn btn-primary btn-xs">
                //             <span className="glyphicon glyphicon-tasks"></span> Books
                //         </NavLink>
                //     </td>
                //     <td className="text-center">
                //         <button className="btn btn-danger btn-xs" onClick={this.deleteAuthor} ><span className="glyphicon glyphicon-trash"></span> Delete</button>
                //     </td> 
                // </tr>
                <div className="authors_list_block">
                    <p className="list-group-item list_link"  onClick={()=>this.searchAuthor(this.props.author.id)} >
                        {this.props.author.name}
                    </p>
                    <p className="add_book_icon" onClick={this.showBookform}><span className="glyphicon glyphicon-plus-sign" ></span></p>
                    {this.state.showForm?<NewBookForm hideBookform={this.hideBookform} author={this.props.author} addBook={this.props.addBook} />:""} 
                </div>
        )
    } 
}
const ListWithRouter = withRouter(List);
export default ListWithRouter; 