import React from 'react';
import { connect } from 'react-redux';
import { ITodos, fetchTodos, deleteTodo } from '../redux/actions';
import { IStoreState } from '../redux/reducers';
import { addFilterAction, filterThunk, removeFilter } from '../redux/actions';
import '../styles.scss';

interface IAppProps {
  products: any;
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  addFilterAction: typeof addFilterAction;
  filterThunk: Function;
  removeFilter: typeof removeFilter;
}

class _App extends React.Component<IAppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onClickTodo = (id: number) => {
    this.props.deleteTodo(id);
  };

  onFilter = (): void => {
    this.props.addFilterAction('delectus');
  };
  onRemoveFilter = (): void => {
    this.props.removeFilter('delectus');
  };

  render() {
    const list = (): JSX.Element[] => {
      return this.props.products.todos.map((todo: ITodos) => (
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
        <div style={{ width: '1000px' }}>
          <div className="custom-button">
            <button onClick={this.onFilter}>Add Filter</button>
            <button onClick={this.onRemoveFilter}>Remove Filter</button>
          </div>
          <div className="custom-button">
            <button onClick={this.onButtonClick}>Fetch</button>
          </div>
          <ul>{list()}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
  addFilterAction,
  filterThunk,
  removeFilter,
})(_App);
