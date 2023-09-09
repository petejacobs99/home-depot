import styles from './HomePage.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar'; 
import FeaturedItemCarousel from './components/FeaturedItemCarousel/FeaturedItemCarousel';
import DepartmentList from './components/DepartmentList/DepartmentList';

export default function App({ departments, user, setUser }) {
	const [depList, setDepList] = useState([]);
	const departmentsRef = useRef([]);
	const navigate = useNavigate();

	const imageUrls = [
		"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb474a69-cf12-4a80-9735-703239dca1fd/dc0c07g-cabdc08e-9326-49ba-9d2e-dd3634bb23af.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ViNDc0YTY5LWNmMTItNGE4MC05NzM1LTcwMzIzOWRjYTFmZFwvZGMwYzA3Zy1jYWJkYzA4ZS05MzI2LTQ5YmEtOWQyZS1kZDM2MzRiYjIzYWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GndPI9s9TjxH6-7bnnfhJInR6vtinkapEHz36yPiZ_E",
		"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddlnx85-af0e161c-6071-4157-b021-b28a58ef275a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRsbng4NS1hZjBlMTYxYy02MDcxLTQxNTctYjAyMS1iMjhhNThlZjI3NWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.eqnsSOdDUvvii_OgzaTYrXRW-Ax0_WDSp9dwhXVdB3Y",
		"https://wallpaperaccess.com/full/3948996.jpg",
		"https://images.start.gg/images/tournament/289797/image-c5c752996c1d06b48c8a90d5dfdacc6a.png?ehk=SqBiJLOchN4v6%2BH%2FTdfVr6eDrBMc3NctYO3YOALgd4o%3D&ehkOptimized=3dT5tdfKHCjhm%2BUOXjWF6xuBAivhlnE62rsqfzU0qRE%3D",
		"https://cdn.gamedevmarket.net/wp-content/uploads/20191203145243/a39b5e87402f1e78e58ead9096c0c65f.png",
		"https://static.wikia.nocookie.net/naruto/images/f/f8/Kaguya%27s_Core_Dimension.png/revision/latest/scale-to-width-down/1000?cb=20160901114351",
		"https://static.wikia.nocookie.net/narutofanon/images/f/fc/Ryuhone_Desert.png/revision/latest?cb=20141002162139"
	  ];

	useEffect(function () {
		async function getDeps() {
			const deps = await depAPI.getAllDepartments()
		}
		setDepList(deps)
	}, []);

	return (
		<div className={styles.HomePage}>
			<h1>test</h1>
			{/* <div>
				<NavBar />
			</div> */}
			<FeaturedItemCarousel showArrows={true} imageUrls={imageUrls} />
			<div>
				<DepartmentList departments={departments}/>
			</div>
		</div>
	);
}
