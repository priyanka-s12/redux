import { useSelector } from 'react-redux';
const Tasks = () => {
  const tasks = useSelector((state) => {
    console.log(state.tasks);
    return state.tasks;
  });
  return (
    <div>
      {tasks.tasks.map((task, index) => (
        <div key={index}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((item) => (
              <li key={item.taskId}>
                <p>{item.name}</p>
                <p>Status: {item.status}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
