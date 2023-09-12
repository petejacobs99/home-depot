import styles from "./NavBar.module.scss"
import { useState } from "react";
import { Link } from "react-router-dom";
import DepListNavBar from "../DepListNavBar/DepListNavBar";
import Hamburger from "../Hamburger/Hamburger";
import HamMenu from "../HamMenu/HamMenu";
import SearchBar from "../SearchBar/SearchBar"

export default function NavBar({ departments }) {
  const [drop, setDrop] = useState(false);

  const handleHover = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBarTop}>
          <div>
            <Link to="/home" className={styles.logo}>LOGO</Link>
          </div>
          <SearchBar />
          <div>
            <Link to="/cart" className={styles.logo}>CART</Link>
          </div>
          <div
            className={styles.hamContainer}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <div className={styles.hamburger}>
              <Hamburger />
            </div>
            {drop && <HamMenu />}
          </div>
        </div>
        <div className={styles.navBarBottom}>
          {/* <>&lt;</> */}
          <DepListNavBar departments={departments}/>
          {/* <>&gt;</> */}
        </div>
      </div>
    </>
  );
}