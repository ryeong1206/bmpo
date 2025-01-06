import React from "react";
import styles from './css/Notice.module.css';

function Notice() {
    return(
        <div className={styles.Notice}>
            <div className="subinner">
                <h1>공지사항</h1>
            </div>
        </div>
    )
};

export default Notice;