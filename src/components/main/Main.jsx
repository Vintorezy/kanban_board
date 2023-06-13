import { Routes, Route } from 'react-router-dom';
import Board from '../board/Board';
import TaskDetail from '../tasks-detail/TaskDetail';
import styles from './Main.module.scss';

const Main = (props) => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path={'/'} element={<Board {...props} />} />

        <Route path={'tasks/:taskId'} element={<TaskDetail {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;
