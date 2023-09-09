import styles from "./DepListNavBar.module.scss"

export default function DepListNavBar({
  departments,
  activeDep,
  setActiveDep
}) {
  const deps = departments.map((dep) => (
    <div
        key={dep.name}
        className={dep === activeDep ? styles.active : ""}
        onClick={() => setActiveDep(dep.name)}
      >
        {dep.name}
      </div>
  ))
  return <span className={styles.DepartmentList}>{deps}</span>
}
