import { useSelector, useDispatch } from 'react-redux';
import { toggleButtonPressed, fetchTasks } from './taskSlice';
import { useEffect } from 'react';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  //dispatch action
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  console.log(tasks);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tasks.tasks.map((task, index) => (
        <div key={index}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((item) => (
              <li key={item.taskId}>
                <p>
                  {item.task}
                  <button
                    onClick={() =>
                      dispatch(
                        toggleButtonPressed({
                          date: task.date,
                          id: item.taskId,
                        })
                      )
                    }
                  >
                    {item.taskStatus}
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
