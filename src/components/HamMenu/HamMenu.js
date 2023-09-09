import styles from "./HamMenu.module.scss";
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';

export default function HamMenu() {
  const user = getUser();
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <ul className={styles.menuContainer}>
      <li>
        {user ? (
          <ul className={styles.userOptions}>
            <li
              onClick={handleClick}
            >
              MY ACCOUNT
            </li>
            {/* <Link to="/users" >MY ACCOUNT</Link> */}
            <li onClick={handleClick}>
              WISHLIST
            </li>
            {/* <Link to="/wishlist" >WISHLIST</Link> */}
            <li
              onClick={handleClick}
            >
              ORDER HISTORY
            </li>
            {/* <Link to="/orders" >ORDER HISTORY</Link> */}
            <li onClick={handleClick}>LOGOUT</li>
          </ul>
        ) : (
          <Link to="/auth" className={styles.auth}>
            SIGN IN / SIGN UP
          </Link>
        )}
      </li>
      {/* <p>{result}</p> */}
      <li>
        <ul className={styles.info}>
          <li onClick={handleClick}>
            <Link to="/faq" className={styles.faq}>FAQ</Link>
          </li>
          <li onClick={handleClick}>
            ABOUT US
          </li>
        </ul>
      </li>
    </ul>
  );
}