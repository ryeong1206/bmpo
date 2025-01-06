import React from "react";
import styles from './css/MyBookmark.module.css'
import ConcertList from "./ConcertList";
import { BmpoState } from "../BmpoContext";

function MyBookmark() {
    const { ConcertData } = BmpoState();
    const filteredConcert = ConcertData.filter((data) => data.mybookmark === true);

    function noResults() {
        return(
            <div style={{margin: '0 auto', padding: '120px', textAlign: 'center'}}>
                <h3>검색 결과가 없어요.</h3>
                <p>필터나 검색어를 다시 확인해 주세요.</p>
            </div>
        )
    }

    return (
        <div className={styles.MyBookmark}>
            <div className="subinner">
                <h3 className="subTitle"><p></p>찜한공연</h3>
                {filteredConcert.length === 0 ? (
                    noResults()
                ):(
                    <ConcertList ConcertData={filteredConcert}/>
                )}
            </div>
        </div>
    )
};

export default MyBookmark;