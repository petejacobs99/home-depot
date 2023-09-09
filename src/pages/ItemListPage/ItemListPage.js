import "../../scss/styles.scss";
import styles from "./ItemListPage.module.scss"
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
/* import Hamburger from "../../components/Hamburger/Hamburger";
import HamMenu from "../../components/HamMenu/HamMenu"; */
import ItemList from "../../components/ItemList/ItemList";

export default function ItemListPage() {
  const [drop, setDrop] = useState(false);

  const handleHover = () => {
    setDrop(!drop);
  };

  return (
    <div className={styles.App}>
      {/* <div className={styles.navBar}>
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
      </div> */}
      <NavBar />
      <div className={styles.itemList}>
        <ItemList />
      </div>
    </div>
  );
}