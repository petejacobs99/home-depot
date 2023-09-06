import styles from "./NavBar.module.scss"
import { useState } from "react";
/* import DepListNavBar from "../DepListNavBar/DepListNavBar"; */
import Hamburger from "../Hamburger/Hamburger";
import HamMenu from "../HamMenu/HamMenu";

export default function NavBar({ departments }) {
  const [drop, setDrop] = useState(false);

  const handleHover = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.navBarTop}>
          <div>LOGO</div>
          <div>SEARCH</div>
          <div>CART</div>
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
          <div>&lt;</div>
          <div>KITCHEN</div>
          <div>BATHROOM</div>
          <div>APPLIANCES</div>
          <div>HARDWARE</div>
          <div>&gt;</div>
        </div>
        {/* <DepListNavBar departments={departments} /> */}
      </div>
    </>
  );
}