import React from 'react';
import { connect } from 'react-redux';
import { ITodos, fetchTodos, deleteTodo } from '../redux/actions';
import { IStoreState } from '../redux/reducers';

interface IAppProps {
  todos: ITodos[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onClickTodo = (id: number) => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <ul>
          {this.props.todos.map((todo: ITodos) => (
            <li key={todo.id} onClick={() => this.onClickTodo(todo.id)}>
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState): { todos: ITodos[] } => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
