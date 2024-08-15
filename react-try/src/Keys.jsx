import { v4 as uuid } from "uuid";
uuid();
console.log("Random id:" + uuid());

const todos = [
  { task: "mow the yard", id: uuid() },
  { task: "Work on Odin Projects", id: uuid() },
  { task: "feed the cat", id: uuid() },
];

export function TodoList() {
  return (
    <ul>
      {todos.map((todo) => {
        <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}
