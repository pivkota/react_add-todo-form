import { TodoInfo } from '../TodoInfo';
import { TodoListType } from '../../api/type';

interface TodoListProps {
  todos: TodoListType[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <p>No todos available.</p>;
  }

  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
