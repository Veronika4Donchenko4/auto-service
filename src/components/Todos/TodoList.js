import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos }) => {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
};

export default TodoList;
