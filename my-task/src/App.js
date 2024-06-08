import React from 'react';
import FormInput from './components/FormInput';
import EditModal from './components/EditModal';
import Sidebar from './components/Sidebar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = { //menyimpan data aplikasi seperti daftar buku ('todos'), status modal ('isEdit') dan status popup.
    todos: [
      {
        id: 1,
        title: "Seorang Pria yang Melalui Duka dengan mencuci Piring",
        author: "dr. Andreas Kurniawan, Sp.KJ"
      },
      {
        id: 2,
        title: "How To Keep Your Cool",
        author: "Seneca"
      },
      {
        id: 3,
        title: "The Principles of Power",
        author: "Dion Yulianto"
      }
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
      author: ""
    },
    profileName: "Sarah",
    showUpdatePopup: false,
    showDeletePopup: false
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  setAuthor = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        author: e.target.value
      }
    })
  }
  // mengatur nilai 'title' dan 'author' dalam 'editData'


  deleteTask = (id) => { // menghapus buku dari daftar berdasarkan ID
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id),
      showDeletePopup: true
    })
  }

  addTask = (data) => { // menambahkan buku baru ke dalam daftar
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data.bookName,
      author: data.bookAuthor
    }

    this.setState({
      todos: [...this.state.todos, newData]
    })
  }

  openModal = (id, data) => {
    this.setState({
      isEdit: true,
      editData: {
        id,
        title: data.title,
        author: data.author
      }
    })
  }

  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }
  // mengatur visibilitas modal edit

  update = () => { //memperbarui informasi buku yang sedang diedit
    const { id, title, author } = this.state.editData;
    const newData = { id, title, author };
    const newTodos = this.state.todos.map(todo => todo.id === id ? newData : todo);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
        author: ""
      },
      showUpdatePopup: true
    });
  }

  closePopup = () => { //menutup popup aplikasi
    this.setState({
      showUpdatePopup: false,
      showDeletePopup: false
    })
  }

  render() { //fungsi lifecycle untuk merender tampilan komponen
    const { todos, profileName, showUpdatePopup, showDeletePopup } = this.state;
    return (
      <div className="app">
        <Sidebar profileName={profileName} />
        <div className="main-content">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h3>Book Collection</h3>
          </div>
          <div className="list">
            <Table striped bordered hover>
              <thead className='table-header'>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((item, index) => (
                  <tr key={item.id}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{item.title}</td>
                    <td className="text-center">{item.author}</td>
                    <td>
                      <div className="action-buttons">
                        <div className='center-buttons'>
                          <Button variant="success" onClick={() => this.openModal(item.id, item)}>Edit</Button>
                          <span className="button-space"></span>
                          <Button variant="danger" onClick={() => this.deleteTask(item.id)}>Delete</Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination className="pagination">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
          <div className="input-form">
            <FormInput add={this.addTask} />
          </div>
          <EditModal
            edit={this.state.isEdit}
            close={this.closeModal}
            change={this.setTitle}
            setDetails={this.setAuthor}
            data={this.state.editData}
            update={this.update}
          />
          {showUpdatePopup && (
            <div className="popup">
              <p>Book successfully updated!</p>
              <button onClick={this.closePopup} className="btn btn-success">Close</button>
              </div>
          )}
          {showDeletePopup && (
            <div className="popup">
              <p>Book successfully deleted!</p>
              <button onClick={this.closePopup} className="btn btn-success">Close</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
