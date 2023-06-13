import uniqid from 'uniqid';

import List from '../list/List';
import { LIST_TYPES, LIST_COPY } from '../../config';
import styles from './Board.module.scss';

const Board = (props) => {
  const { tasks, setTasks } = props;

  function addNewTask(title, description, stat) {
    const task = {
      id: uniqid(),
      title,
      description,
      created: new Date().toISOString(),
      status: stat,
    };

    setTasks([...tasks, task]);
  }

  return (
    <div className={styles.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type);

        return (
          <List
            key={type}
            type={type}
            title={LIST_COPY[type]}
            tasks={tasks}
            task={listTasks}
            addNewTask={addNewTask}
            setTasks={setTasks}
          />
        );
      })}
    </div>
  );
};

export default Board;
