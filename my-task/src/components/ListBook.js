import React from "react"
import propTypes from "prop-types"
import Button from "./Button"

const ListBook = ({book, deleteBook, openEditModal}) => {
    //fungsi ketika tombol delete di tekan
    const handleDeleteBook = (id) => {
        deleteBook (id)
    }

    return(
        <div style={bookItem} >
            <p>{book.title}</p>
            <p>{book.author}</p>
            <div>
                <Button text="edit"    variant="success" action={()=>openEditModal(book.id, book)}/>
                <Button text="delete"  variant="warning" action={()=>handleDeleteBook(book.id)}/>
            </div>
        </div>
    )
}

ListBook.propTypes ={
    book:propTypes.object.isRequired,
    deleteBook:propTypes.func.isRequired,
    openEditModal: propTypes.func.isRequired
}
export default ListBook;

const bookItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
} 