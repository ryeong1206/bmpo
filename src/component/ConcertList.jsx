import React, { useState, useEffect} from "react";
import styles from './css/ConcertList.module.css';
import { MdBookmark, MdOutlineRefresh, MdSearch } from 'react-icons/md';
import { Link } from "react-router-dom";
import { ProDispatch, calculateDday, toggleBookmark } from "../BmpoContext";

export function ConcertItem({data}) {
    const [isBookmarked, setIsBookmarked] = useState(data.mybookmark);
    const dispatch = ProDispatch();

    const handleToggleBookmark = () => {
        const newBookmarkState = !isBookmarked;
        setIsBookmarked(newBookmarkState);
        toggleBookmark(data.id, newBookmarkState, dispatch);
    };

    return(
        <div className={styles.ConcertItem}>
            <p className={styles.bookmark} onClick={handleToggleBookmark}>
                {isBookmarked
                ? <MdBookmark style={{fill: '#FF5050'}}/>
                : <MdBookmark  style={{fill: '#ffffff'}}/>}
            </p>
            <Link to={`/concert/${data.id}`}>
                <div className={styles.posterSec}>
                    <p className={styles.dday}>{calculateDday(data.performancedatef.start)}</p>
                    <img src={data.poster}/>
                </div>
                <div className={styles.infoSec}>
                    <p className={styles.location}>{data.location}</p>
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.reservdate}>{data.reservdate}</p>
                </div>
                <button>예매하기</button>
            </Link>
        </div>
    )
};

function ConcertList({CData}) {
    const [sortBy, setSortBy] = useState("concertDate"); //정렬 기준
    const [sortData, setSortData] = useState([]); // 정렬된 데이터 상태 추가
    const [filteredConcerts, setFilteredConcerts] = useState([]);   
    
    const [regionFilter, setRegionFilter] = useState('');
    const [ageFilter, setAgeFilter] = useState('');
    const [hoursFilter, setHoursFilter] = useState('');
    const [search, setSearch] = useState('');

    const handleSearchClick = () => {
        let filtered = [...CData];
        
        if (regionFilter) {
            filtered = filtered.filter(data => data.region === regionFilter);
        }
        if (ageFilter) {
            filtered = filtered.filter(data => data.age >= parseInt(ageFilter));
        }
        if (hoursFilter) {
            filtered = filtered.filter(data => data.hours <= parseInt(hoursFilter));
        }
        if (search) {
            filtered = filtered.filter(data => data.title.includes(search));
        }

        // 정렬 적용
        if (sortBy === "concertDate") {
            filtered.sort((a, b) => a.performancedatef.start - b.performancedatef.start);
        } else if (sortBy === "bookmark") {
            filtered.sort((a, b) => b.bookmark - a.bookmark);
        }

        setFilteredConcerts(filtered);
    };

    // 정렬 및 필터 통합 처리
    useEffect(() => {
        let sorted = [];
        if (sortBy === "concertDate") {
            sorted = [...CData].sort((a, b) => a.performancedatef.start - b.performancedatef.start);
        } else if (sortBy === "bookmark") {
            sorted = [...CData].sort((a, b) => b.bookmark - a.bookmark);
        }
        setSortData(sorted); // 정렬 결과만 업데이트
    }, [sortBy, CData]);
    
    useEffect(() => {
        let filtered = sortData; // 정렬 결과 기반 필터링
        if (regionFilter) {
            filtered = filtered.filter((data) => data.region === regionFilter);
        }
        if (ageFilter) {
            filtered = filtered.filter((data) => data.age >= parseInt(ageFilter));
        }
        if (hoursFilter) {
            filtered = filtered.filter((data) => data.hours <= parseInt(hoursFilter));
        }
        if (search) {
            filtered = filtered.filter((data) => data.title.includes(search));
        }
        setFilteredConcerts(filtered); // 필터링 결과 업데이트
    }, [sortData, regionFilter, ageFilter, hoursFilter, search]);


    // 필터 변경
    const handleRegionChange = (e) => {setRegionFilter(e.target.value);};
    const handleAgeChange  = (e) => {setAgeFilter(e.target.value);};
    const handleHoursChange  = (e) => {setHoursFilter(e.target.value);};
    const handleSearchChange  = (e) => {setSearch(e.target.value);};

    // 필터 리셋셋
    const filterReset = () => {
        setRegionFilter('');
        setAgeFilter('');
        setHoursFilter('');
        setSearch('');
        setSortBy('concertDate')
        setFilteredConcerts(CData);
    };

    // 정렬 버튼 클릭 처리
    const handleSortChange = (type) => {
        setSortBy(type);
        const sorted = [...filteredConcerts];
        if (type === "concertDate") {
            sorted.sort((a, b) => a.performancedatef.start - b.performancedatef.start);
        } else if (type === "bookmark") {
            sorted.sort((a, b) => b.bookmark - a.bookmark);
        }
        setFilteredConcerts(sorted);
    };
    

    // 검색결과 없을 때 화면
    function noResults() {
        return(
            <div style={{margin: '0 auto', padding: '120px', textAlign: 'center'}}>
                <h3>검색 결과가 없어요.</h3>
                <p>필터나 검색어를 다시 확인해 주세요.</p>
            </div>
        )
    }

    return(
        <div className={styles.ConcertList}>
            {/* dropdown 필터 */}
            <div className={styles.filters}>
                <select onChange={handleRegionChange} value={regionFilter}>
                    <option value="">지역</option>
                    <option value="부산">부산</option>
                    <option value="서울">서울</option>
                    <option value="대구">대구</option>
                </select>
                <select onChange={handleAgeChange} value={ageFilter}>
                    <option value="">연령</option>
                    <option value="14">만 14세 이상</option>
                    <option value="19">만 19세 이상</option>
                </select>
                <select onChange={handleHoursChange} value={hoursFilter}>
                    <option value="">관람시간</option>
                    <option value="60">60분 이하</option>
                    <option value="120">120분 이하</option>
                    <option value="180">180분 이하</option>
                </select>
                <input type="text" placeholder="제목, 지휘자를 입력해 주세요." value={search} onChange={handleSearchChange}/>
                <button onClick={handleSearchClick}>검색   <MdSearch /></button>
                <button onClick={filterReset}><MdOutlineRefresh /></button>
            </div>

            {/* 리스트 총건수, 정렬버튼 */}
            <div className={styles.count}>
                <h5>총 {filteredConcerts.length}건</h5>
                <div>
                    <button
                        className={sortBy === "concertDate" ? styles.selected : ''}
                        onClick={() => setSortBy("concertDate")}
                    >공연임박순</button>
                    <span></span>
                    <button
                        className={sortBy === "bookmark" ? styles.selected : ''}
                        onClick={() => setSortBy("bookmark")}
                    >인기순</button>
                </div>
            </div>

            {/* 검색결과 */}
            <div className={styles.filteredList}>
                {filteredConcerts.length === 0 ? (
                    noResults()
                ) : (
                    filteredConcerts.map(data => (
                        <ConcertItem data={data} key={data.id} />
                    ))
                )}
            </div>
        </div>
    )
};

export default ConcertList;