import React, { useEffect, useState } from "react";
import styles from './css/MyReservationList.module.css'
import { ProDispatch } from "../BmpoContext";

// 날짜 형식 함수
const formatDate = (date) => {
    const year = String(date.getFullYear()).padStart();
    const month = String(date.getMonth()).padStart();
    const day = String(date.getDate()).padStart();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return (`${year}년 ${month}월 ${day}일 ${hours}:${minutes}`)
}

export function MyReservationItem({data}) {
    return (
        <div className={styles.MyReservationItem}>
            <div className={styles.completeDate}>{formatDate(data.reservationComplete)}</div>
            <div className={styles.title}>{data.title}</div>
            <div className={styles.rsvDate}>{formatDate(data.concertDate)}</div>
            <div className={styles.seat}>{data.reservationSeat}석</div>
            <button className={styles.cancle}>예매취소</button>
        </div>
    )
}

function MyReservationList({MyReservationData}) {
    const [sortBy, setSortBy] = useState("concertDate");
    const [sortData, setSortData] = useState([]);

    useEffect(() => {
        let sorted = [];
        if (sortBy === "concertDate") {
            sorted = [...MyReservationData].sort((a, b) => a.concertDate - b.concertDate);
        } else if (sortBy === "reservationComplete") {
            sorted = [...MyReservationData].sort((a, b) => a.reservationComplete - b.reservationComplete)
        }
        setSortData(sorted);
    }, [sortBy, MyReservationData])

    return (
        <div className={styles.MyReservationList}>
            
            {/* 리스트 총건수, 정렬버튼 */}
            <div className={styles.count}>
                <h5>총 {MyReservationData.length}건</h5>
                <div>
                    <button
                        className={sortBy === "concertDate" ? styles.selected : ''}
                        onClick={() => setSortBy("concertDate")}
                    >공연임박순</button>
                    <span></span>
                    <button
                        className={sortBy === "reservationComplete" ? styles.selected : ''}
                        onClick={() => setSortBy("reservationComplete")}
                    >예매완료순</button>
                </div>
            </div>

            {/* 리스트 */}
            <div className={styles.listHead}>
                <div className={styles.completeDate}>예매완료일시</div>
                <div className={styles.title}>공연이름</div>
                <div className={styles.rsvDate}>공연일시</div>
                <div className={styles.seat}>좌석</div>
                <div className={styles.cancle}>예매취소</div>
            </div>
            {sortData.map(data => (
                <MyReservationItem data={data} key={data.id} />
            ))}
        </div>
    )
};

export default MyReservationList;