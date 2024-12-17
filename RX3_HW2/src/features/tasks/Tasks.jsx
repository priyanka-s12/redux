import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from './taskSlice';
const Tasks = () => {
  const dispatch = useDispatch();
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
                <p>
                  {item.name}{' '}
                  <button
                    onClick={() =>
                      dispatch(
                        toggleStatus({ date: task.date, taskId: item.taskId })
                      )
                    }
                  >
                    {item.status}
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
