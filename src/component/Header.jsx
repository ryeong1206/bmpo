import React from "react";
import styles from './css/Header.module.css'
import '../App.css';
import { Link } from 'react-router-dom';
import { MdLogin, MdOutlineLogout, MdOutlineAccountCircle } from "react-icons/md";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_in}>
                <div className={styles.logo}>
                    <Link to='/'><img src="/images/logo.svg" alt="" /></Link>
                </div>

                <div className={styles.nav}>
                    <ul className={styles.dept1}>
                        <li>소개</li>
                        <li>공연</li>
                        <li>갤러리</li>
                        <li>공지사항</li>
                    </ul>
                    <div className={styles.subnav}>
                        <ul className={styles.dept2}>
                            <Link to="/Introduce"><li>오케스트라 소개</li></Link>
                            <Link to="/Conductor"><li>지휘자 소개</li></Link>
                            <Link to="/History"><li>연혁</li></Link>
                            <Link to="/Donation"><li>후원회 안내</li></Link>
                        </ul>
                        <ul className={styles.dept2}>
                            <Link to="/Concert"><li>공연/예매</li></Link>
                        </ul>
                        <ul className={styles.dept2}>
                            <Link to="/Gallery"><li>갤러리</li></Link>
                            <Link to="/Gallery"><li>프로젝트</li></Link>
                        </ul>
                        <ul className={styles.dept2}>
                            <Link to="/Notice"><li>공지사항</li></Link>
                        </ul>
                    </div>
                </div>

                <ul className={styles.loginmenu}>
                    <li className={styles.login}>
                        <Link to='/Login'><div>로그인<MdLogin /></div></Link>
                    </li>
                    <li className={styles.mymenu}>
                        마이메뉴<MdOutlineLogout />
                        <div className={styles.mymenusub}>
                            <ul className={styles.mydept2}>
                                <Link to="/MyReservation"><li>예매내역</li></Link>
                                <Link to="/MyBookmark"><li>찜한공연</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.logout}>
                        <Link to='/'><div>로그아웃<MdOutlineAccountCircle /></div></Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;
