import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import Td from './td'

class BooksTable extends Component {

    deleteBook(id){
        alert(id)
        // this.props.deleteBook(id, this.props.history)
    }

    render() {
        console.log(this.props)
        const books = this.props.books && this.props.books.map((book,i)=>{
            return(
                <Td key={i} book={book} deleteBook={this.props.deleteBook} />
            //   <tr key={i}>
            //     <td>{book.name}</td>
            //     <td>{book.description.substring(0,50)+"..."}</td>
            //     <td className="text-center"><NavLink to={"/books/"+book.id} className="btn btn-success btn-xs"><span className="glyphicon glyphicon-eye-open"></span> Show</NavLink></td>
            //     <td className="text-center"><NavLink to={"/books/"+book.id} className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-edit"></span> Edit</NavLink></td>
                
                
            //   </tr>
            )      
        })
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th colSpan="2" ></th>
                    </tr>
                </thead>
                <tbody>
                    {books}
                </tbody>
            </table>
        )
      }
      
}

const BooksTableWithRouter = withRouter(BooksTable)
export default BooksTableWithRouter;