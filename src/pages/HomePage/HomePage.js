import styles from './HomePage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FeaturedItemCarousel from './components/FeaturedItemCarousel/FeaturedItemCarousel';
import DepartmentList from './components/DepartmentList/DepartmentList';

export default function App({ departments, user, setUser }) {
	const [depList, setDepList] = useState([]);
	const departmentsRef = useRef([]);
	const navigate = useNavigate();

	useEffect(function () {
		async function getDeps() {
			const deps = await depAPI.getAllDepartments()
		}
		setDepList(deps)
	}, []);

	return (
		<div className={styles.HomePage}>
			<div className={styles.NavBar}>
				<NavBar />
			</div>
			<FeaturedItemCarousel />
			<div className={styles.DepartmentList}>
				<DepartmentList />
			</div>
		</div>
	);
}
