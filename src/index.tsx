import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>Counter: {this.state.counter}</div>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
