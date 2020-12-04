import React from 'react';
import { connect } from 'react-redux';
import { IFetchTodosAction, ITodos, fetchTodos } from '../redux/actions';
import { IStoreState } from '../redux/reducers';

interface IAppProps {
  todos: ITodos[];
  fetchTodos(): any;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <ul>
          {this.props.todos.map((todo: ITodos) => (
            <li key={todo.id}>{todo.title}</li>
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

export default connect(mapStateToProps, { fetchTodos })(_App);
