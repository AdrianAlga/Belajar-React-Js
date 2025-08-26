function List() {
  const tasks = [
    { id: 1, title: "Belajar React", done: true },
    { id: 2, title: "Ngopi", done: false },
    { id: 3, title: "Main game", done: false },
  ];

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ color: task.done ? "green" : "red" }}>
            {task.title} {task.done ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
