import { useState } from "react"
import styles from "./DepartmentList.module.scss"
import { useNavigate } from "react-router-dom";

export default function DepartmentList({ departments }) {
  const [activeDep, setActiveDep] = useState('')
  const images = [
    "https://i.imgur.com/7Mbv1qf.png",
    "https://i.imgur.com/4furMoT.png",
    "https://i.imgur.com/FAWekwf.png",
    "https://i.imgur.com/cSFKjc1.jpg"
  ]  
  const navigate = useNavigate()

  async function handleOnClick() {
    setActiveDep(dep.name)
    navigate(`/home/${dep.name}`)
  }

  const deps = departments.map((dep, i) => (
      <div
        key={dep.name}
        className={dep === activeDep ? styles.active : ""}
        onClick={handleOnClick}
      >
        <img className={styles.img} src={images[i]} />
        {dep.name}
      </div>
    ))
    
    return (
      <div className={styles.DepartmentList}>
        {deps}
      </div> 
    )
  }