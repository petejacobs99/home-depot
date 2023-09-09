import "../../scss/styles.scss";
import styles from "../ItemListPage/ItemListPage.module.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import * as catsAPI from "../../utilities/catDep-api";
import NavBar from "../../components/NavBar/NavBar";
/* import Hamburger from "../../components/Hamburger/Hamburger";
import HamMenu from "../../components/HamMenu/HamMenu"; */
import CategoryList from "../../components/CategoryList/CategoryList";
/* import department from "../../../models/department"; */

export default function CategoryListPage({ departments }) {
  const [drop, setDrop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeDep, setActiveDep] = useState('');
  const departmentsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function getCats() {
      /* const cats = await catsAPI.getCategories(department._id); */
      const cats = await catsAPI.getAllCategories();
      departmentsRef.current = cats.reduce((deps, cat) => {
        const dep = cat.department.name;
        return deps.includes(dep) ? deps : [...deps, dep];
      }, []);
      setCategories(cats);
      setActiveDep(departmentsRef.current[0]);
    }
    getCats();
  }, []);

  /* useEffect(function () {
    async function getDeps() {
      const deps = await catsAPI.getDepartments();
      console.log(deps)
      departmentsRef.current = [...deps]
      let name = departmentsRef.current[0].name
      let id = departmentsRef.current[0]._id
      setActiveDep(name);
      getCats(name, id)
    }
    getDeps();
  }, []);

  async function getCats(depName, depId) {
    const data = await catsAPI.getCategories(depId);
    setCategories(data);
    setActiveDep(depName)
  } */

  const handleHover = () => {
    setDrop(!drop);
  };

  async function handleClick(category) {
    navigate(`/category/${category}`);
  }

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
      <div className={styles.categoryList}>
        <CategoryList
          categories={categories.filter(cat => cat.department.name === activeDep)}
          setCategories={setCategories} 
          onClick={handleClick}
        />
      </div>
    </div>
  );
}