import { useState } from "react"
import styles from "./DepartmentList.module.scss"

export default function DepartmentList({ departments }) {
  const [activeDep, setActiveDep] = useState('')
  const images = [
    "https://i.imgur.com/cSFKjc1.jpg",
    "https://i.imgur.com/cSFKjc1.jpg",
    "https://i.imgur.com/cSFKjc1.jpg",
    "https://i.imgur.com/cSFKjc1.jpg"
  ]  

  const deps = departments.map((dep, i) => (
      <div
        key={dep.name}
        className={dep === activeDep ? styles.active : ""}
        onClick={() => setActiveDep(dep.name)}
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