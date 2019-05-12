import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // this.props.addTodo(this.state)
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.props.todos.length > 0 ? this.props.todos[0].text : null}
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   }
// }


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// export default connect(null, mapDispatchToProps)(CreateTodo)
export default connect(mapStateToProps)(CreateTodo)
