import { useState } from "react"
import styles from "./DepListNavBar.module.scss"

export default function DepListNavBar({departments}) {
  const [activeDepNav, setActiveDepNav] = useState('')

  const deps = departments.map((dep) => (
    <span
      key={dep.name}
      className={dep === activeDepNav ? styles.active : ""}
      onClick={() => setActiveDepNav(dep.name)}
    >
      {dep.name}
    </span>
  ))
  
  return (
    <span className={styles.DepartmentList}>
      {deps}
    </span> 
  )
}