import React, { createContext, useContext, useReducer} from "react";

// 정보---------------------------------------------------------------
    // 공연 정보
    const ConcertData = [
        {
            id: 1,
            poster: '/images/01_poster.png',
            infoimg: '/images/01_info.png',
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            region: '부산',
            location: '롯데콘서트홀',
            performancedate: '25년 10월 3일 ~ 25년 11월 2일',
            performancedatef: {
                start: new Date(2025, 10-1, 3),
                end: new Date(2025, 11-1, 2)
            },
            reservdate: '25년 8월 1일 13:00 ~ 25년 10월 1일 24:00',
            reservdatef: {
                start: new Date(2025, 8-1, 1, 13, 0),
                end: new Date(2025, 10-1, 1, 23, 59)
            },
            age: 14,
            hours: 40,
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            conductor: '김영수',
            bookmark: 3976,
            mybookmark: true,
        },
        {
            id: 2,
            poster: '/images/02_poster.png',
            infoimg: '/images/02_info.png',
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            region: '서울울',
            location: '롯데콘서트홀',
            performancedatef: {
                start: new Date(2025, 9-1, 3),
                end: new Date(2025, 10-1, 2)
            },
            performancedate: '25년 9월 3일 ~ 25년 10월 2일',
            reservdatef: {
                start: new Date(2025, 8-1, 1, 13, 0),
                end: new Date(2025, 10-1, 1, 23, 59)
            },
            reservdate: '25년 8월 1일 13:00 ~ 25년 10월 1일 24:00',
            age: 16,
            hours: 100,
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            conductor: '김영수',
            bookmark: 114,
            mybookmark: false,
        },
        {
            id: 3,
            poster: '/images/03_poster.png',
            infoimg: '/images/03_info.png',
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            region: '대구',
            location: '롯데콘서트홀',
            performancedate: '25년 9월 3일 ~ 25년 10월 2일',
            performancedatef: {
                start: new Date(2025, 9-1, 3),
                end: new Date(2025, 10-1, 2)
            },
            reservdate: '25년 8월 1일 13:00 ~ 25년 10월 1일 24:00',
            reservdatef: {
                start: new Date(2025, 8-1, 1, 13, 0),
                end: new Date(2025, 10-1, 1, 23, 59)
            },
            age: 18,
            hours: 120,
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            conductor: '김영수',
            bookmark: 320,
            mybookmark: false,
        },
        {
            id: 4,
            poster: '/images/04_poster.png',
            infoimg: '/images/04_info.png',
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            region: '부산',
            location: '롯데콘서트홀',
            performancedate: '25년 10월 3일 ~ 25년 11월 2일',
            performancedatef: {
                start: new Date(2025, 10, 3),
                end: new Date(2025, 10, 2)
            },
            reservdate: '25년 9월 1일 13:00 ~ 25년 11월 1일 24:00',
            reservdatef: {
                start: new Date(2025, 8, 1, 13, 0),
                end: new Date(2025, 10, 1, 23, 59)
            },
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            age: 19,
            hours: 180,
            conductor: '김영수',
            bookmark: 524,
            mybookmark: false,
        },
        {
            id: 5,
            poster: '/images/05_poster.png',
            infoimg: '/images/05_info.png',
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            region: '부산',
            location: '롯데콘서트홀',
            performancedate: '25년 9월 3일 ~ 25년 10월 2일',
            performancedatef: {
                start: new Date(2025, 9-1, 3),
                end: new Date(2025, 10-1, 2)
            },
            reservdate: '25년 7월 1일 13:00 ~ 25년 8월 1일 24:00',
            reservdatef: {
                start: new Date(2025, 7-1, 1, 13, 0),
                end: new Date(2025, 8-1, 1, 23, 59)
            },
            age: 14,
            hours: 190,
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            conductor: '김영수',
            bookmark: 65,
            mybookmark: false,
        },
        {
            id: 6,
            poster: '/images/06_poster.png',
            infoimg: '/images/06_info.png',
            title: '스마일리',
            region: '부산',
            location: '롯데콘서트홀',
            performancedate: '25년 4월 3일 ~ 25년 5월 2일',
            performancedatef: {
                start: new Date(2025, 4-1, 3),
                end: new Date(2025, 5-1, 2)
            },
            reservdate: '25년 1월 30일 13:00 ~ 25년 2월 28일 24:00',
            reservdatef: {
                start: new Date(2025, 1-1, 30, 13, 0),
                end: new Date(2025, 2-1, 28, 23, 59)
            },
            price: 'R석 90,000원 / S석 70,000원 / A석 30,000원',
            age: 14,
            hours: 200,
            conductor: '김영수',
            bookmark: 32,
            mybookmark: true,
        },
    ]

    // 갤러리 정보
    const GalleryData = [
        {
            id: 1,
            title: '부산 메트로폴리탄 필하모닉 오케스트라 정기연주회 음유시인 : Troubadour',
            date: '25년 4월 10일',
            text: '',
            file: '/images/gallery_01_file_01.svg',
            img1: '/images/gallery_01_img_01.png',
            img2: '/images/gallery_01_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
        {
            id: 2,
            title: '부산 메트로폴리탄 필하모닉 오케스트라 정기연주회 음유시인 : Troubadour',
            date: '25년 4월 10일',
            text: '',
            file: '/images/gallery_02_file_01.svg',
            img1: '/images/gallery_02_img_01.png',
            img2: '/images/gallery_02_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
        {
            id: 3,
            title: '부산 메트로폴리탄 필하모닉 오케스트라 정기연주회 음유시인 : Troubadour',
            date: '25년 4월 10일',
            text: '',
            file: '/images/gallery_03_file_01.svg',
            img1: '/images/gallery_03_img_01.png',
            img2: '/images/gallery_03_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
    ]

    // 프로젝트 정보
    const ProjectData = [
        {
            id: 1,
            title: '2025 찾아가는 음악회',
            date: '25년 4월 10일',
            text: '',
            file: '/images/project_01_file_01.svg',
            img1: '/images/project_01_img_01.png',
            img2: '/images/project_01_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
        {
            id: 2,
            title: '2025 찾아가는 음악회',
            date: '25년 4월 10일',
            text: '',
            file: '/images/project_02_file_01.svg',
            img1: '/images/project_02_img_01.png',
            img2: '/images/project_02_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
        {
            id: 3,
            title: '2025 찾아가는 음악회',
            date: '25년 4월 10일',
            text: '',
            file: '/images/project_03_file_01.svg',
            img1: '/images/project_03_img_01.png',
            img2: '/images/project_03_img_02.png',
            img3: '',
            img4: '',
            video1: '',
            video2: '',
        },
    ]

    // 내 예매현황
    const MyReservationData = [
        {
            id: 1,
            reservationComplete: new Date(2025, 8, 3, 19, 1),
            title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
            concertDate: new Date(2025, 9, 29, 19),
            reservationSeat: 'R',
        },
        {
            id: 2,
            reservationComplete: new Date(2025, 8, 16, 9, 47),
            title: '2025 찾아가는 음악회',
            concertDate: new Date(2025, 11, 6, 11),
            reservationSeat: 'R',
        },
        {
            id: 3,
            reservationComplete: new Date(2025, 7, 15, 14, 36),
            title: '가곡과 아리아의 밤',
            concertDate: new Date(2025, 10, 8, 14),
            reservationSeat: 'R',
        },
        {
            id: 4,
            reservationComplete: new Date(2025, 7, 17, 20, 3),
            title: '추억의 영화음악',
            concertDate: new Date(2025, 11, 30, 19),
            reservationSeat: 'R',
        },
    ]


// 전역 함수-----------------------------------------------------------------------
// D-Day 계산
export const calculateDday = (startDate) => {
    const today = new Date();
    const start = new Date(startDate);
    const diffTime = start - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `D-${diffDays}` : (diffDays === 0 ? 'D-Day' : 'D-Day')
};


// 북마크 토글
export const toggleBookmark = (id, isBookmarked, dispatch) => {
    const newBookmarkState = !isBookmarked;
    const bookmarkChange = newBookmarkState ? -1 : 1;

    dispatch({
        type: 'TOGGLE_BOOKMARK',
        payload : {
            id: id,
            isBookmarked: newBookmarkState,
            bookmarkChange: bookmarkChange,
        }
    })
};

const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK';

function ProReducer(state, action) {
    switch(action.type) {
        case TOGGLE_BOOKMARK:
            return {
                ...state,
                ConcertData: state.ConcertData.map(concert => 
                    concert.id === action.payload.id
                    ? {
                        ...concert,
                        mybookmark: action.payload.isBookmarked,
                        bookmark: concert.bookmark + action.payload.bookmarkChange
                    }
                    : concert
                ),
            }
        default:
            throw new Error(`error ${action.type}`);
}};




const BmpoContext = createContext();
const ProDispatchContext = createContext();

export const BmpoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProReducer, {
        ConcertData: ConcertData,
        GalleryData: GalleryData,
        ProjectData: ProjectData,
        MyReservationData : MyReservationData
    });

    return(
        <BmpoContext.Provider value={state}>
            <ProDispatchContext.Provider value={dispatch}>
                {children}
            </ProDispatchContext.Provider>
        </BmpoContext.Provider>
    )
};

export function BmpoState () {
    return useContext(BmpoContext);
};

export function ProDispatch () {
    return useContext(ProDispatchContext)
};