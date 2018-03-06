import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import  NewBookForm from './newbook.js'
import  Td from './td.js'


class BooksTable extends Component {
    render() {
        console.log(this.props)
        const authors = this.props.authors && this.props.authors.map((author,i)=>{
            return(
                <Td  key={i} author={author} addBook={this.props.addBook} deleteAuthor={this.props.deleteAuthor} />
            )      
        })
        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Country</th>
                        <th colSpan="3" ></th>
                    </tr>
                </thead>
                <tbody>
                    {authors}
                </tbody>
            </table>
        )
      }
      
}
export default BooksTable;