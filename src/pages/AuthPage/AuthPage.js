import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthPage.module.scss';
import NavBar from "../../components/NavBar/NavBar";
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
     <NavBar />
    <main className={styles.AuthPage}>
      <div className={styles.container}>
        {/* <div> */}
        {/* <h3
            className={showLogin ? styles.signUpText : styles.logInText}
            onClick={() => setShowLogin(!showLogin)}
          >
            {showLogin ? 'Create an Account' : 'Sign In'}
          </h3> */}
        <h3>
          {showLogin ? 'SIGN IN' : 'CREATE AN ACCOUNT'}
        </h3>
        {/* </div> */}
        {showLogin ? (
          <div>
            <LoginForm setUser={setUser} />
            <p>DON'T HAVE AN ACCOUNT?</p>
            <button onClick={() => setShowLogin(!showLogin)}>CREATE AN ACCOUNT</button>
          </div>
        ) : (
          <div>
            <SignUpForm setUser={setUser} />
            <button className={styles.back} onClick={() => setShowLogin(!showLogin)}>← SIGN IN</button>
          </div>
        )}
      </div>
      <Link to="/home/categories" className={styles.back}>RETURN TO HOME PAGE</Link>
    </main>
  </>
  );
}