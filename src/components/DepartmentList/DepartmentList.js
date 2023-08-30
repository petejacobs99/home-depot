import styles from './DepartmentList.module.scss'

export default function DepartmentList({ departments, activeDep, setActiveDep }) {
    const deps = departments.map( dep =>
    <span
        key={dep}
        className={dep === activeDep ? styles.active : '' }
        onClick={() => setActiveDep(dep)}
    >
        {dep}
    </span>   
    )
    return (
        <span className={styles.DepartmentList}>
            {deps}
        </span>
    )
}