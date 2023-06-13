import { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { LIST_TYPES } from '../../config';
import FormAddNewTask from '../forms/FormAddNewTask';
import DropDown from '../dropdown/DropDown';
import styles from './List.module.scss';

const List = (props) => {
  const { type, title, tasks, addNewTask, setTasks, task } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(!isFormVisible);
  };

  const back = tasks.filter((obj) => {
    return obj.status === 'backlog';
  });

  const read = tasks.filter((obj) => {
    return obj.status === 'ready';
  });

  const inProgres = tasks.filter((obj) => {
    return obj.status === 'inProgress';
  });

  return (
    <div className={styles.list}>
      <div className={cx(styles.listItem)}>
        <h2 className={cx(styles.listTitle)}>{title}</h2>
        {type === LIST_TYPES.FINISHED && (
          <span
            className={cx(styles.listdel)}
            onClick={() => setTasks(tasks.filter((task) => task.status !== 'finished'))}>
            Clear
          </span>
        )}
      </div>
      {task.length ? (
        task.map((task) => (
          <Link to={`/tasks/${task.id}`} key={task.id} className={cx(styles.taskLink)}>
            <div className={cx(styles.task)}>{task.title}</div>
          </Link>
        ))
      ) : (
        <p>No tasks added yet</p>
      )}

      {type === LIST_TYPES.BACKLOG && isFormVisible && (
        <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
      )}

      {type === LIST_TYPES.BACKLOG && (
        <button
          className={cx(styles.addButton)}
          onClick={handleClick}
          style={{ display: !isFormVisible ? 'block' : 'none' }}>
          + Add card
        </button>
      )}

      {type === LIST_TYPES.READY && (
        <button
          className={cx(styles.addButton, { [styles.add]: back.length === 0 })}
          onClick={handleClick}
          disabled={back.length === 0}
          style={{ display: !isFormVisible ? 'block' : 'none' }}>
          + Add card
        </button>
      )}

      {type === LIST_TYPES.IN_PROGRESS && (
        <button
          className={cx(styles.addButton, { [styles.add]: read.length === 0 })}
          onClick={handleClick}
          disabled={read.length === 0}
          style={{ display: !isFormVisible ? 'block' : 'none' }}>
          + Add card
        </button>
      )}

      {type === LIST_TYPES.FINISHED && (
        <button
          className={cx(styles.addButton, { [styles.add]: inProgres.length === 0 })}
          onClick={handleClick}
          disabled={inProgres.length === 0}
          style={{ display: !isFormVisible ? 'block' : 'none' }}>
          + Add card
        </button>
      )}

      {type !== LIST_TYPES.BACKLOG && isFormVisible && (
        <DropDown
          type={type}
          tasks={tasks}
          setFormVisible={setFormVisible}
          isFormVisible={isFormVisible}
          addNewTask={addNewTask}
          setTasks={setTasks}
          task={task}
          back={back}
          read={read}
          inProgres={inProgres}
        />
      )}
    </div>
  );
};

export default List;
