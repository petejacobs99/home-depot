import styles from "./DepartmentList.module.scss"

export default function DepartmentList({ departments, handleOpenCategoryListPage }) {
    /*
    const deps = departments.map((dep) => (
      <div
        key={dep}
        className={dep === activeDep ? styles.active : ""}
        onClick={() => setActiveDep(dep)}
      >
        {dep}
      </div>
    ))
    */
    return (
      <div className="DepartmentList">
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="bathroom"
          />
          <p>KITCHEN</p>
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="bathroom"
          />
          <p>BATHROOM</p>
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="appliances"
          />
          <p>APPLIANCES</p>
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="hardware"
          />
          <p>HARDWARE</p>
        </div>
      </div>
    )
  }