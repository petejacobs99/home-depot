import styles from "./DepartmentList.module.scss"

export default function DepartmentList({ departments, handleOpenCategoryListPage }) {
    const deps = departments.map((dep) => (
      <div
        key={dep}
        className={dep === activeDep ? styles.active : ""}
        onClick={() => setActiveDep(dep)}
      >
        {dep}
      </div>
    ))
    
    return (
      <div className={styles.DepartmentList}>
        {/* <div>
				  {/* <img className={styles.img} src={departments.image} />
          <div>{department.name}</div>
			  </div> */} 
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="kitchen"
          />
          {department.name[0]}
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="bathroom"
          />
          {department.name[1]}
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="appliances"
          />
          {department.name[2]}
        </div>
        <div>
          <img
            src="https://i.imgur.com/cSFKjc1.jpg"
            alt="hardware"
          />
          {department.name[3]}
        </div>
      </div> 
    )
  }