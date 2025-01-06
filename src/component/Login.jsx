import React from "react";
import styles from './css/Login.module.css';
import MyBookmark from "./MyBookmark";


function Login() {
    return(
        <div className={styles.Login}>
            <div className="subinner">
                <h1>로그인</h1>
                <MyBookmark></MyBookmark>
            </div>
        </div>
    )
};

export default Login;