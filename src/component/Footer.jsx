// 원본
import React from "react";
import styles from './css/Footer.module.css'
import '../App.css';

function Footer() {
    return (
        <header className={styles.footer}>
            <div className={styles.footer_in}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <p><img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" /></p>
                        <ul>
                            <li>(사)부산메트로폴리탄필하모닉오케스트라</li>
                            <li>(48511) 부산광역시 남구 용소로7번길 64, 지하 (대연동)</li>
                            <li>Tel 070-7727-0188     Fax 051-612-0188</li>
                            <li>email mbcpmpo@daum.net</li>
                            <li>www.bmpo.co.kr</li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <p>
                            <svg viewBox="0 0 24 24" width='100%' height='100%'  preserveAspectRatio="none"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                        </p>
                        <p>
                            <svg viewBox="0 0 24 24" width='100%' height='100%'  preserveAspectRatio="none"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>
                        </p>
                    </div>
                </div>
                <p className={styles.line}></p>
                <div className={styles.bottom}>
                    <p><img src={`${process.env.PUBLIC_URL}/images/footer_sponser_01.png`} alt="familySite" /></p>
                    <p><img src={`${process.env.PUBLIC_URL}/images/footer_sponser_02.png`} alt="familySite" /></p>
                    <p><img src={`${process.env.PUBLIC_URL}/images/footer_sponser_03.png`} alt="familySite" /></p>
                    <p><img src={`${process.env.PUBLIC_URL}/images/footer_sponser_04.png`} alt="familySite" /></p>
                </div>
            </div>
        </header>
    )
};

export default Footer;
