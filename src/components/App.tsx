import React from 'react';
import { connect } from 'react-redux';
import { ITodos, fetchTodos, deleteTodo } from '../redux/actions';
import {
  addFilterAction,
  filterThunk,
  removeFilter,
  radioFilter,
} from '../redux/actions';
import '../styles.scss';

interface IAppProps {
  products: any;
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  addFilterAction: typeof addFilterAction;
  filterThunk: Function;
  removeFilter: typeof removeFilter;
  radioFilter: typeof radioFilter;
}

class _App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }
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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = event.target.value === 'true' ? true : false;
    this.props.radioFilter(payload);
    window.history.pushState({}, '', '/home');
  };

  filterBuilder = <K extends keyof ITodos>(key: K) => {
    const allTodos = this.props.products.todos.map((todo: ITodos) => {
      return todo[key];
    });
    let filter: any = [...new Set(allTodos)];
    return filter;
  };

  render() {
    const list = (): JSX.Element[] => {
      return this.props.products.filtredTodos.map((todo: ITodos) => (
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
            <h3>Is compleged</h3>
            {this.filterBuilder('completed').map((val: string, i: number) => (
              <React.Fragment key={i}>
                <input
                  type="radio"
                  name="completed"
                  value={val}
                  id={i.toString()}
                  onChange={this.handleChange}
                />
                <label htmlFor={i.toString()}>{val.toString()}</label>
              </React.Fragment>
            ))}
          </div>
          <div className="custom-button">
            {this.props.products.filtredTodos.length}
          </div>
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
  radioFilter,
})(_App);
