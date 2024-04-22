import { createContext, useContext } from "react";
import { useEffect, useMemo, useState } from "react";

interface Todo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

const TodoDisplay = ({ todo }: { todo: Todo }) => <>
	<h3>ID {todo.id}, User ID: {todo.userId}</h3>
	<p>{todo.todo}</p>
	<p>{todo.completed ? '✅' : '❌'}</p>
</>

const UserIdInput = () => {
	const {userId, setUserId} = useContext(TodoContext);

	return <input type="number" value={userId ?? ''} onChange={(event) => {
		const newUserId = parseInt(event.target.value);
		setUserId(isNaN(newUserId) ? null : newUserId);
	}} placeholder="User ID to filter TODOs" />
}

const TodoList = () => {
	const {todos, numberOfCompletedTodos} = useContext(TodoContext);

	return <>
		<UserIdInput />

		<h1>Number of completed TODOs: {numberOfCompletedTodos}</h1>
	
		{todos.map((todo) =>
			<TodoDisplay key={todo.id} todo={todo} />)
		}
	</>
}

type TodoContextValue = {
	todos: Todo[];
	userId: number | null;
	setUserId: (userId: number | null) => void;
	numberOfCompletedTodos: number;
};

const TodoContext = createContext<TodoContextValue>({
	todos: [],
	userId: null,
	setUserId: () => { },
	numberOfCompletedTodos: 0
});

function TodoProvider({ children }: { children: React.ReactNode }) {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [userId, setUserId] = useState<number | null>(null);
	
	const fetchTodos = async (userId?: number | null) => {
		let response;
		if (!userId) {
			response = await fetch('https://dummyjson.com/todos');
		} else {
			response = await fetch(`https://dummyjson.com/todos/user/${userId}`);
		}
			
		const todosResponse = await response.json();
		setTodos(todosResponse.todos);
	}

	useEffect(() => {
		fetchTodos(userId);
	}, [userId]);

	const numberOfCompletedTodos = useMemo(() => {
		return todos.filter((todo) => todo.completed).length
	}, [todos]);

	return <TodoContext.Provider value={{
		todos,
		userId,
		setUserId,
		numberOfCompletedTodos
	}}>{children}</TodoContext.Provider>
}

export default function AdvancedFeaturesDemoEndResult() {
	const [count, setCount] = useState<number>(0);

	return <>
		<h1>Counter: {count}</h1>
		<button onClick={() => setCount(count - 1)}>Decrement</button>
		<button onClick={() => setCount(count + 1)}>Increment</button>
		<hr />
		
		<TodoProvider>
			<TodoList />
		</TodoProvider>
	</>
}