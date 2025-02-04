import React from "react";
import styles from './css/Concert.module.css';
import ConcertList from "./ConcertList";
import { BmpoState } from "../BmpoContext";


function Concert() {
    const { ConcertData } = BmpoState();
    const CData = ConcertData || [];

    return(
        <div className={styles.Concert}>
            <div className="subinner">
                {/* subtitle */}
                <h3 className="subTitle"><p></p>공연/예매</h3>

                {ConcertData.length === 0 ? (
                    console.log('dddddddddd')
                ) : (
                    <ConcertList CData={CData}/> 
                )}
            </div>
        </div>
    )
};

export default Concert;