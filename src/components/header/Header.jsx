import UserLogin from '../user-login/UserLogin';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Awesome Kanban Board</h1>
      <div>
        <UserLogin />
      </div>
    </header>
  );
}

export default Header;
