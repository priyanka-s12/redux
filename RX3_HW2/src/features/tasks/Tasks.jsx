import { useSelector, useDispatch } from 'react-redux';
import { toggleButtonPressed } from './taskSlice';
const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    // console.log(state.tasks);
    return state.tasks;
  });
  return (
    <div>
      {tasks.tasks.map((task, index) => (
        <div key={index}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((item, index) => (
              <li key={index}>
                {/* <p>
                  {item.name}{' '}
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
                    {item.status === 'Completed' ? 'Pending' : 'Completed'}
                  </button>
                </p> */}
                <p>
                  {item.name}{' '}
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
                    {item.isCompleted ? 'Completed' : 'Pending'}
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
