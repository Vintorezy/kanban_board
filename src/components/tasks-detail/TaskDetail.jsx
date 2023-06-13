import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import cx from 'classnames';
import styles from '../tasks-detail/TaskDetail.module.scss';

function TaskDetail(props) {
  const { tasks, setTasks } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState('');
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === taskId);

  function handleEditClick() {
    setIsEdit(true);
    setDescription(task.description);
  }

  function handleSaveClick() {
    setTasks(
      tasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, description };
        } else {
          return t;
        }
      }),
    );
    setIsEdit(false);
  }

  function handleCancelClick() {
    setIsEdit(false);
    setDescription(task.description);
  }

  let descriptionElem;
  if (isEdit) {
    descriptionElem = (
      <>
        <textarea
          className={cx(styles['area-text'])}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className={cx(styles['button'], styles['button-save'])} onClick={handleSaveClick}>
          Сохранить
        </button>
        <button
          className={cx(styles['button'], styles['button-cancel'])}
          onClick={handleCancelClick}>
          Отмена
        </button>
      </>
    );
  } else {
    descriptionElem = (
      <>
        <span className={cx(styles.descript)}>
          {task.description || 'This task has no description'}
        </span>
        <button onClick={handleEditClick}>Редактировать</button>
      </>
    );
  }

  return (
    <div className={cx(styles.wrapper2)}>
      <div className={cx(styles.header2)}>
        <h2 className={cx(styles.title2)}>{task.title}</h2>
        <p className={cx(styles['text-area'])}>Описание: {descriptionElem}</p>
      </div>
      <Link to="/" className={cx(styles.homeLink)}>
        &#9587;
      </Link>
    </div>
  );
}

export default TaskDetail;
