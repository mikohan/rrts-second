import React from 'react';
import { connect } from 'react-redux';
import { ITodos, fetchTodos, deleteTodo } from '../redux/actions';
import { IStoreState } from '../redux/reducers';
import { filterAction } from '../redux/actions';

interface IAppProps {
  todos: ITodos[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  filterAction: typeof filterAction;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onClickTodo = (id: number) => {
    this.props.deleteTodo(id);
  };

  onFilter = (): void => {
    this.props.filterAction('sorem');
  };

  render() {
    const list = (): JSX.Element[] => {
      return this.props.todos.map((todo: ITodos) => (
        <li onClick={() => this.onClickTodo(todo.id)} key={todo.id}>
          {todo.title}
        </li>
      ));
    };
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '24px',
        }}
      >
        <div>
          <button onClick={this.onFilter}>Filter</button>
        </div>
        <div style={{ width: '1000px' }}>
          <button onClick={this.onButtonClick}>Fetch</button>
          <ul>{list()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState): { todos: ITodos[] } => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  filterAction,
})(_App);
