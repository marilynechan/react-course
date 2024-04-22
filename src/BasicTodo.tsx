import { useState } from "react";

export default function BasicTodo() {
	const [todos, setTodos] = useState<string[]>([]);

	return <div>

		{todos.map((todo, index) => 
			<div>
				<input type="text" value={todo} onChange={(event) => {
						const newTodos = [...todos];
						newTodos[index] = event.target.value;
						setTodos(newTodos);
				}} />

				<button onClick={() => {
					const newTodos = [...todos];
					newTodos.splice(index, 1);
					setTodos(newTodos);

				}}>Delete TODO</button>

			</div>
		)}

		<button onClick={() => {
			const newTodos = [...todos];
			newTodos.push('');
			setTodos(newTodos);
		}}>
			Add TODO
		</button>

	</div>
}
