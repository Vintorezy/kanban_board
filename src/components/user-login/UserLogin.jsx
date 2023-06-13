import { useState } from 'react';
import cx from 'classnames';

import Avatar from '../../asset/user-avatar.jpg';
import Arrow from '../../asset/arrow-down.svg';
import styles from './UserLogin.module.scss';

function UserLogin() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={cx(styles.user)}>
      <div
        className={cx(styles.userButton, styles.clickable, { [styles.open]: isProfileOpen })}
        onClick={() => setIsProfileOpen(!isProfileOpen)}>
        <img src={Avatar} className={cx(styles.userAvatar)} alt="avatar" />
        <img
          src={Arrow}
          className={cx(styles.userChevron, { [styles.userChevronOpen]: isProfileOpen })}
          alt="arrow"
        />
      </div>

      {isProfileOpen && (
        <ul className={cx(styles.userMenu)}>
          <li>Profile</li>
          <li>Log out</li>
        </ul>
      )}
    </div>
  );
}

export default UserLogin;
