import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <div className={styles.form}>
        <input
          type="email"
          placeholder="Email Address"
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.signInBtn}>Sign In</button>
      </div>
      <button className={styles.createAccountBtn}>Create an Account</button>
    </div>
  );
};

export default AuthPage;
