import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

class Td extends Component {
    
    deleteBook=()=> {
        this.props.deleteBook(this.props.book.id, this.props.history)
    }
    
    render() {
        console.log(this.props)
        return (
            <tr>
                <td>{this.props.book.name}</td>
                <td>{this.props.book.description.substring(0,75)+"..."}</td>
                <td className="text-center"><NavLink to={"/books/"+this.props.book.id} className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-edit"></span> show</NavLink></td>
                <td className="text-center">
                    <button className="btn btn-danger btn-xs" onClick={this.deleteBook} ><span className="glyphicon glyphicon-trash"></span> Delete</button>
                </td> 
            </tr>
        )
    } 
}
const TdWithRouter = withRouter(Td);
export default TdWithRouter; 