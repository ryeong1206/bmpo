// 원본

import React, { useEffect, useState } from "react";
import styles from './css/ConcertDetail.module.css';
import { useParams } from "react-router-dom";
import { BmpoState, ProDispatch, calculateDday, toggleBookmark  } from "../BmpoContext";
import { MdBookmarkBorder, MdBookmark, MdClose, MdOutlineRefresh   } from 'react-icons/md';


import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './css/ConcertDetailCalendar.css'


// /Concert/:id
function ConcertDetail() {
    // 콘서트 데이터 가지고 오기
    const { ConcertData } = BmpoState();
    
    // 아이디 가지고 오기
    const {id} = useParams();
    
    // 콘서트 데이터 중 아이디에 맞는 데이터 가지고 오기
    const [data, setData] = useState(() => {
        return ConcertData.find(item => item.id === parseInt(id));
    });
    const dispatch = ProDispatch();

    // 예약 모달 상태
    const [modalOpen, setModalOpen] = useState(false);
    // 예약완료 모달 상태
    const [completeModalOpen, setCompleteModalOpen] = useState(false);

    // 캘린더 날짜 선택 데이터
    const [selectedDate, setSelectedDate] = useState(null);

    // 선택된 좌석 정보 저장
    const [selectedSeat, setSelectedSeat] = useState({ level: '', price: 0, row: null, col: null });

    // 선택된 좌석 업데이트트
    const handleSeatSelect = (row, col) => {
        let level = '';
        let price = 0;
    
        if (row < 5) {
            level = 'R석';
            price = 90000;
        } else if (row < 10) {
            level = 'S석';
            price = 70000;
        } else {
            level = 'A석';
            price = 30000;
        }
    
        setSelectedSeat({ level, price, row, col }); // 좌석 정보와 좌표 저장
    };

    // 좌석 초기화
    const resetSeatSelection = () => {
        setSelectedSeat({ level: '', price: 0 }); // 초기화
    };

    // 좌석 등급 및 가격 설정
    const seatInfo = {
        R: { price: 90000, color: '#5346CC' },
        S: { price: 70000, color: '#59BF20' },
        A: { price: 30000, color: '#5CB1C7' }
    };

    const modalClose = () => {
        setModalOpen(false)
        setCompleteModalOpen(false)
        resetSeatSelection()
    }

    const reservationComplete = () => {
        setModalOpen(false)
        setCompleteModalOpen(true);
    }




    // 캘린더 주말 클래스 지정
    const tileClassName=({ date })=>{
        // 일요일(0) 또는 토요일(6)인지 확인하여 클래스를 지정합니다.
        if (date.getDay() === 0 /* 일요일 */) {
            return 'sunday'; // 일요일에 해당하는 클래스
        }
        if (date.getDay() === 6 /* 토요일 */) {
            return 'saturday'; // 토요일에 해당하는 클래스
        }
        return ''; // 다른 날짜는 추가 클래스가 없습니다.
    }

    // 캘린더 예약기간 설정
    const performancedatefStart = data.performancedatef.start;
    const performancedatefEnd = data.performancedatef.end;
    const isDisabled = ({date, view}) => {
        if (view === 'month') {
            return date < performancedatefStart || date > performancedatefEnd;
            // return date < new Date(2025, 11, 11) || date > new Date(2026, 1, 1);
        }
        return false
    };
    
    // 캘린더 날짜에 일 빼기기 + 달력 예약기간 첫 째날로 포커스
    const [value, setValue] = useState(performancedatefStart);

    // 
    const handleChange = (date) => {
        setSelectedDate(date);
        setValue()
    };




    // 북마크 토글
    const [isBookmarked, setIsBookmarked] = useState(data.mybookmark);
    useEffect(() => {
        const updateData = ConcertData.find(item => item.id === parseInt(id));
        setData(updateData);
    }, [ConcertData, id]);
    const handleToggleBookmark = () => {
        const newBookmarkState = !isBookmarked;
        setIsBookmarked(newBookmarkState);
        toggleBookmark(data.id, newBookmarkState, dispatch);
    };



    // 페이지 불러올 때 예외 처리
    if (!id) return <div>잘못된 경로입니다.</div>;
    if (!data) return <div>해당 공연 정보를 찾을 수 없습니다.</div>;




    // 본문 내용 ***************************************************************************************************
    return(
        <div className={styles.Concert}>
            {/* 예약 모달 */}
            {modalOpen &&
                <div className={styles.modalBackground}>
                    <div className={styles.reservationModal}>
                        <button className={styles.modalClose} onClick={() => modalClose()}><MdClose /></button>
                        <div className={styles.modalContents}>
                            <h3 className={styles.modalTitle}>원하시는 좌석을 선택해 주세요.</h3>
                            <div className={styles.seatMap}>
                                <div className={styles.stage}>STAGE</div>
                                <div className={styles.seatContainer}>
                                    {Array.from({ length: 20 }, (_, row) => (
                                        <div key={row} className={styles.row}>
                                            {Array.from({ length: 20 }, (_, col) => {
                                                let level = '';
                                                if (row < 5) level = 'R';
                                                else if (row < 10) level = 'S';
                                                else level = 'A';
                                                const isSelected =selectedSeat.row === row + 1 && selectedSeat.col === col + 1; // 선택 여부 확인

                                                return (
                                                    <button
                                                        key={`${row}-${col}`}
                                                        className={`${styles.seat} ${isSelected ? styles.selected : ''}`}
                                                        style={{
                                                            backgroundColor: seatInfo[level].color
                                                        }}
                                                        onClick={() => handleSeatSelect(row + 1, col + 1)}
                                                    ></button>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.right}>
                                <ul>
                                    <li>
                                        <b>좌석등급 안내</b>
                                        <p>
                                            <div className={styles.seatGuid}>
                                                <p className={styles.seatColor} style={{backgroundColor:'#5346CC'}}></p>
                                                <p className={styles.seatLevel}>R석</p>
                                                <p className={styles.seatPrice}>90,000원</p>
                                            </div>
                                            <div className={styles.seatGuid}>
                                                <p className={styles.seatColor} style={{backgroundColor:'#59BF20'}}></p>
                                                <p className={styles.seatLevel}>R석</p>
                                                <p className={styles.seatPrice}>90,000원</p>
                                            </div>
                                            <div className={styles.seatGuid}>
                                                <p className={styles.seatColor} style={{backgroundColor:'#5CB1C7'}}></p>
                                                <p className={styles.seatLevel}>R석</p>
                                                <p className={styles.seatPrice}>90,000원</p>
                                            </div>
                                        </p>
                                    </li>
                                    <li>
                                        <b>좌석등급 안내</b>
                                        <p>
                                            <ul>
                                                <li style={{color: selectedSeat.level ? '#000' : '#999'}}>{selectedSeat.level || '선택 안됨'}</li>
                                            </ul>
                                        </p>
                                        <button className={styles.seatReset} onClick={resetSeatSelection}><MdOutlineRefresh />다시 선택</button>
                                    </li>
                                    <li>
                                        <b>가격</b>
                                        <p style={{color: selectedSeat.price ? '#000' : '#999'}}>{selectedSeat.price ? `${selectedSeat.price.toLocaleString()}원` : '선택 안됨'}</p>
                                    </li>
                                </ul>
                                <button className={styles.complete} onClick={() => reservationComplete()}  disabled={!selectedSeat.price}>선택완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* 예약완료 모달 */}
            {completeModalOpen && 
                <div className={styles.modalBackground}>
                    <div className={styles.completeModal}>
                        <button className={styles.modalClose} onClick={() =>  modalClose()}><MdClose /></button>
                        <div className={styles.modalContents}>
                            <div>
                                <h3 className={styles.modalTitle}>예매를 완료했어요!</h3>
                                <p>예매내역은 마이페이지 &gt; 예매내역에서 확인할 수 있어요.</p>
                            </div>
                        </div>
                        <button className={styles.confirm} onClick={() => modalClose()}>확인</button>
                    </div>
                </div>
            }

            {/* inner */}
            <div className="subinner">

                {/* 1) 공연정보 달력 */}
                <h3 className="subTitle"><p></p>공연상세</h3>
                <div className={styles.section1}>
                    {/* 공연정보 */}
                    <div className={styles.concert}>
                        <h3>{data.title}</h3>
                        <div className={styles.poster}>
                            <p className={styles.dday}>{calculateDday(data.performancedatef.start)}</p>
                            <img src={data.poster} alt="poster"/>
                        </div>
                        <ul>
                            <li>
                                <p className={styles.type}>공연장소</p>
                                <p>{data.region} / {data.location}</p>
                            </li>
                            <li>
                                <p>공연일시</p>
                                <p>{data.performancedate}</p>
                            </li>
                            <li>
                                <p>예매일시</p>
                                <p className={styles.higlig}>{data.reservdate}</p>
                            </li>
                            <li>
                                <p>입장연령</p>
                                <p>만 {data.age}세 이상</p>
                            </li>
                            <li>
                                <p>관람시간</p>
                                <p>{data.hours}분 이상</p>
                            </li>
                            <li>
                                <p>가격</p>
                                <p>{data.price}</p>
                            </li>
                            <li>
                                <p>지휘자</p>
                                <p>{data.conductor}</p>
                            </li>
                        </ul>
                    </div>

                    {/* 달력 */}
                    <div className={styles.calendar}>
                        <Calendar
                            // 일요일부터 시작
                            calendarType = "hebrew"
                            // 주말에 class 추가
                            onChange={handleChange}
                            value={value}
                            // '일' 빼기
                            formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                            tileClassName={tileClassName}
                            tileDisabled={isDisabled}
                        ></Calendar>

                        <button className={styles.bookmark} onClick={handleToggleBookmark}>
                            {isBookmarked
                            ? <MdBookmark style={{fill: '#FF5050'}}/>
                            : <MdBookmarkBorder style={{fill: '#000000'}}/>}
                            {data.bookmark}
                        </button>
                        <button className={styles.reserve} onClick={() => setModalOpen(true)} disabled={!selectedDate}>예매하기</button>
                    </div>
                </div>
                
                {/* 2) 상세정보 이미지지 */}
                <h3 className="subTitle"><p></p>상세정보</h3>
                <div className={styles.section2}>
                    <img src={data.infoimg} alt="infoimage"/>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ConcertDetail;