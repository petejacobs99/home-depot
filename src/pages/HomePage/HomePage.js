import "../../scss/styles.scss";
import styles from '../HomePage/HomePage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DepListNavBar from '../../components/DepListNavBar/DepListNavBar'; 
import FeaturedItemCarousel from '../../components/FeaturedItemCarousel/FeaturedItemCarousel';
import DepartmentList from '../../components/DepartmentList/DepartmentList';

export default function HomePage({ departments }) {
	const [depList, setDepList] = useState([]);
	const departmentsRef = useRef([]);
	const navigate = useNavigate();

	const imageUrls = [
		"https://i.imgur.com/g6VqT8r.jpg",
		"https://i.imgur.com/TTU1odM.jpg",
		"https://i.imgur.com/9MpuQ2X.jpg",
		"https://i.imgur.com/WR2b1NJ.jpg",
		"https://i.imgur.com/4furMoT.png",
		"https://i.imgur.com/cSFKjc1.jpg"
	  ];
	

	return (
		<div className={styles.HomePage}>
			<DepListNavBar />
			<div className={styles.Carousel}>
				<FeaturedItemCarousel imageUrls={imageUrls} />
			</div>
			<div>
				<DepartmentList departments={departments}/>
			</div>
		</div>
	);
}
