import { Todo } from "../Models/interfaces";
import TodoComp from "./Todo";

const TodoList: React.FC<{ todos: Todo[], onDelete: (id: string) => void }> = ({ todos, onDelete }) => {

    return <>

        <ul>
            {todos.map(todo => (
                <TodoComp onDelete={onDelete.bind(null, todo.id)} text={todo.text} key={todo.id} />
            ))}
        </ul>

    </>



}

export default TodoList;