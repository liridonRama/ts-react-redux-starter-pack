import { Component } from "react";
import { connect } from "react-redux";

import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";



interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

interface AppState {
  fetching: boolean
}


export class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false }
  }

  componentDidUpdate = (prevProps: AppProps) => {
    if (prevProps.todos.toString() !== this.props.todos.toString()) {
      this.setState({ fetching: false });
    }
  }

  onClickFetch = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return <div className="">
      <input onClick={this.onClickFetch} type="button" value="Fetch" />
      <ul>
        {this.state.fetching ? "Loading" : this.renderList()}
      </ul>
    </div>
  }
}


const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({ todos });



export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);