import { useState } from "react";

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

export default function AdvancedFeaturesDemo() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, todo: 'Buy milk', completed: false, userId: 1 },
		{ id: 2, todo: 'Buy bread', completed: true, userId: 1 },
		{ id: 3, todo: 'Buy eggs', completed: false, userId: 2 },
		{ id: 4, todo: 'Buy cheese', completed: true, userId: 2 },
	]);

	return <>
		<h1>TODOs</h1>
		{todos.map((todo) =>
			<TodoDisplay key={todo.id} todo={todo} />)
		}
	</>
}
