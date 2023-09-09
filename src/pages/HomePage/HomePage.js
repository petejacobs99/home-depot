import "../../scss/styles.scss";
import styles from '../HomePage/HomePage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'; 
import FeaturedItemCarousel from '../../components/FeaturedItemCarousel/FeaturedItemCarousel';
import DepartmentList from '../../components/DepartmentList/DepartmentList';

export default function HomePage({ departments }) {
	const [depList, setDepList] = useState([]);
	const departmentsRef = useRef([]);
	const navigate = useNavigate();

	const imageUrls = [
		"https://i.imgur.com/cSFKjc1.jpg",
		"https://i.imgur.com/cSFKjc1.jpg",
		"https://i.imgur.com/cSFKjc1.jpg",
		"https://i.imgur.com/cSFKjc1.jpg",
		"https://i.imgur.com/cSFKjc1.jpg"
	  ];
	

	return (
		<div className={styles.HomePage}>
			<div>
				<NavBar />
			</div>
			<div className={styles.Carousel}>
				<FeaturedItemCarousel imageUrls={imageUrls} />
			</div>
			<div>
				<DepartmentList departments={departments}/>
			</div>
		</div>
	);
}
