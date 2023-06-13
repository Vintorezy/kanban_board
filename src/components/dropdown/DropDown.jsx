import React from 'react';
import uniqid from 'uniqid';
import { LIST_TYPES } from '../../config';
import Arrow from '../../asset/Vector-arrow.svg';
import styles from './DropDown.module.scss';

function DropDown(props) {
  const { type, setTasks, setFormVisible, back, read, inProgres } = props;

  const remItem = (e) => {
    e.preventDefault();
    const taskId = e.target.id;

    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== taskId);

      const task = {
        id: uniqid(),
        title: e.target.title,
        description: e.target.getAttribute('data-des'),
        status: type,
      };

      newTasks.push(task);

      return newTasks;
    });

    setFormVisible(false);
  };

  return (
    <div className={styles.arrow}>
      <div className={styles.dropdown} onClick={() => setFormVisible(false)}>
        <img src={Arrow} alt="arrow" />
      </div>
      <div className={styles.dropdownTitle}>
        {type === LIST_TYPES.READY &&
          back.map((title) => (
            <p
              key={title.id}
              id={title.id}
              title={title.title}
              data-tag={title.status}
              data-des={title.description}
              data-desc="title"
              className={styles.title}
              onClick={(e) => remItem(e)}>
              {title.title}
            </p>
          ))}

        {type === LIST_TYPES.IN_PROGRESS &&
          read.map((title) => (
            <p
              key={title.id}
              id={title.id}
              title={title.title}
              data-tag={title.status}
              data-desc="description"
              data-des={title.description}
              className={styles.title}
              onClick={(e) => remItem(e)}>
              {title.title}
            </p>
          ))}

        {type === LIST_TYPES.FINISHED &&
          inProgres.map((title) => (
            <p
              key={title.id}
              id={title.id}
              title={title.title}
              data-tag={title.status}
              data-desc="description"
              data-des={title.description}
              className={styles.title}
              onClick={(e) => remItem(e)}>
              {title.title}
            </p>
          ))}
      </div>
    </div>
  );
}
export default DropDown;
