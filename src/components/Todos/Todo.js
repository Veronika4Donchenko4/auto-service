import styles from './Todo.module.css';

const Todo = ({ todo }) => {
  return (
    <div>
      <h1>{todo}</h1>
    </div>
  );
};

export default Todo;
