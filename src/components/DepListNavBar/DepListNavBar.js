import { useState } from "react"
import styles from "./DepListNavBar.module.scss"

export default function DepListNavBar({
  departments
}) {
  const [activeDepNav, setActiveDepNav] = useState('')

  const deps = departments.map((dep, i) => (
    <div
      key={dep.name}
      className={dep === activeDepNav ? styles.active : ""}
      onClick={() => setActiveDepNav(dep.name)}
    >
      <img className={styles.img} src={images[i]} />
      {dep.name}
    </div>
  ))
  
  return (
    <span className={styles.DepartmentList}>
      {deps}
    </span> 
  )
}