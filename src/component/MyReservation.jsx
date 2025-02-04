// 원본
import React, { useState } from "react";
import styles from './css/MyReservation.module.css'
import { BmpoState, ProDispatch } from "../BmpoContext";
import MyReservationList from "./MyReservationList";

function MyReservation() {
    const { MyReservationData } = BmpoState();
    const reservationData = MyReservationData || [];
    function noResults() {
        return(
            <div style={{margin: '0 auto', padding: '120px', textAlign: 'center'}}>
                <h3>예매 내역이 없어요.</h3>
                <p>공연 &gt; 공연예매에서 공연을 예매할 수 있어요.</p>
            </div>
        )
    }

    return (
        <div className={styles.MyReservation}>
            <div className="subinner">
                <h3 className="subTitle"><p></p>예매내역</h3>
                {MyReservationData.length === 0 ? (
                    noResults()
                ) : (
                    <MyReservationList MyReservationData={reservationData} />
                )}
            </div>
        </div>
    )
};

export default MyReservation;