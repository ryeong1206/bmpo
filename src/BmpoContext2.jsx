import React, {
    createContext,
    useState
} from "react";

// 전역으로 관리할 정보---------------------------------------------------------------
// 공연 정보
const ConcertData = [{
        id: 1,
        poster: `${process.env.PUBLIC_URL}/images/yj_poster_01.png`,
        infoimg: `${process.env.PUBLIC_URL}/images/yj_infoimg_01.png`,
        title: '부산 메트로폴리탄 필하모닉 오케스트라 10주년 기념 감사공연',
        location: '롯데콘서트홀',
        performancedate: '25년 10월 3일 ~ 25년 11월 2일',
        buttonText: '예매하기',
        dday: 'D-2',
    },
    {
        id: 2,
        poster: `${process.env.PUBLIC_URL}/images/yj_poster_02.png`,
        infoimg: `${process.env.PUBLIC_URL}/images/yj_infoimg_02.png`,
        title: 'BMFO와 함께하는 추억의 영화음악',
        location: '부산문화회관 중극장',
        performancedate: '25년 10월 13일 ~ 25년 11월 12일',
        buttonText: '예매하기',
        dday: 'D-12',

    },
    {
        id: 3,
        poster: `${process.env.PUBLIC_URL}/images/yj_poster_03.png`,
        infoimg: `${process.env.PUBLIC_URL}/images/yj_infoimg_03.png`,
        title: '가곡과 아리아의 밤',
        location: '부산예술회관 공연장',
        performancedate: '25년 10월 23일 ~ 25년 11월 22일',
        buttonText: '예매하기',
        dday: 'D-21',

    },
    {
        id: 4,
        poster: `${process.env.PUBLIC_URL}/images/yj_poster_04.png`,
        infoimg: `${process.env.PUBLIC_URL}/images/yj_infoimg_04.png`,
        title: 'BMPO 정기연주회 음유시인Ⅲ : All-in-One',
        location: '부산문화회관 대극장',
        performancedate: '25년 10월 25일 ~ 25년 11월 25일',
        buttonText: '예매하기',
        dday: 'D-24',

    },
    {
        id: 5,
        poster: `${process.env.PUBLIC_URL}/images/yj_poster_05.png`,
        infoimg: `${process.env.PUBLIC_URL}/images/yj_infoimg_05.png`,
        title: 'BMPO 정기연주회 음유시인Ⅱ : Pop&Aria',
        location: '영화의전당 하늘연극장',
        performancedate: '25년 11월 05일 ~ 25년 12월 25일',
        buttonText: '예매하기',
        dday: 'D-35',

    },
]


// 갤러리 정보
const GalleryData = [{
    /* 첫번째를 메인 더미로 사용 */
        id: 1,
        title: 'BMPO 정기연주회 음유시인 I : Troubadour',
        date: '24년 6월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_gallery_01.png`,
        video1: '<iframe width="660" height="415" src="https://www.youtube.com/embed/47E2E95cON4?si=iQVkSwqPU1V3kuQX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진과 영상첨부 합니다',
    },
    {
        id: 2,
        title: '게반트 한마음 오케스트라 콘서트',
        date: '24년 5월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_gallery_02.png`,
        video1: '',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    },
    {
        id: 3,
        title: '한스 짐머 영화음악 콘서트',
        date: '24년 4월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_gallery_03.png`,
        video1: '',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    },
    {
        id: 4,
        title: '히사이시 조 & 지브리 영화음악 콘서트',
        date: '24년 3월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
        video1: '',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    },
    // {
    //     id: 5,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },
    // {
    //     id: 6,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },
    // {
    //     id: 7,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },
    // {
    //     id: 8,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },
    // {
    //     id: 9,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },
    // {
    //     id: 10,
    //     title: '히사이시 조 & 지브리 영화음악 콘서트',
    //     date: '24년 3월 10일',
    //     img1: `${process.env.PUBLIC_URL}/images/yj_gallery_04.png`,
    //     video1: '',
    //     text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 공연사진 첨부합니다',
    // },

]

// 공지사항 정보
const NoticeData = [{
        id: 1,
        title: '가곡과 아리아의 밤 부산예술회관 공연장 입장공지',
        date: '24년 7월 10일',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 가곡과 아리아의 밤 부산예술회관 공연장 입장공지 안내 드립니다\n - 할인에 해당하는 증빙자료 미지참 시에는 현장에서 차액을 지불한 후 관람이 가능합니다. \n- 국가유공자, 장애인 본인 및 동반 1인 할인 50% \n - 경로우대 할인 50% \n\n - 단체 (20인이상) 할인 20% \n - 공연문의 : 070-7727-0188',
         file: 'https://www.bmpo.co.kr/_files/ugd/d1667f_ef106bd01fa547b1b3ed1a2f5aede5d8.pdf' 
    },
    {
        id: 2,
        title: 'BMPO와 함께하는 추억의 영화음악 부산문화회관 중극장 입장공지',
        date: '24년 6월 10일',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 가곡과 아리아의 밤 부산예술회관 공연장 입장공지 안내 드립니다\n - 할인에 해당하는 증빙자료 미지참 시에는 현장에서 차액을 지불한 후 관람이 가능합니다. \n- 국가유공자, 장애인 본인 및 동반 1인 할인 50% \n - 경로우대 할인 50% \n\n - 단체 (20인이상) 할인 20% \n - 공연문의 : 070-7727-0188',
         file: 'https://www.bmpo.co.kr/_files/ugd/d1667f_ef106bd01fa547b1b3ed1a2f5aede5d8.pdf' 
    },
    {
        id: 3,
        title: '제18회 부산국제 어린이청소년 영화제 애니메이션 음악회 영화의 전당 하늘연극장 입장공지',
        date: '24년 5월 10일',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 가곡과 아리아의 밤 부산예술회관 공연장 입장공지 안내 드립니다\n - 할인에 해당하는 증빙자료 미지참 시에는 현장에서 차액을 지불한 후 관람이 가능합니다. \n- 국가유공자, 장애인 본인 및 동반 1인 할인 50% \n - 경로우대 할인 50% \n\n - 단체 (20인이상) 할인 20% \n - 공연문의 : 070-7727-0188',
         file: 'https://www.bmpo.co.kr/_files/ugd/d1667f_ef106bd01fa547b1b3ed1a2f5aede5d8.pdf' 
    },
    {
        id: 4,
        title: '음유시인Ⅱ "Pop&Aria" 영화의전당 하늘연극장 입장안내',
        date: '24년 4월 10일',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 가곡과 아리아의 밤 부산예술회관 공연장 입장공지 안내 드립니다\n - 할인에 해당하는 증빙자료 미지참 시에는 현장에서 차액을 지불한 후 관람이 가능합니다. \n- 국가유공자, 장애인 본인 및 동반 1인 할인 50% \n - 경로우대 할인 50% \n\n - 단체 (20인이상) 할인 20% \n - 공연문의 : 070-7727-0188',
         file: 'https://www.bmpo.co.kr/_files/ugd/d1667f_ef106bd01fa547b1b3ed1a2f5aede5d8.pdf' 
    },
    {
        id: 5,
        title: '2024 통합 공지안내',
        date: '24년 1월 1일',
        text:'안녕하세요 부산 메트로폴리탄 필하모닉 오케스트라 입니다. \n 가곡과 아리아의 밤 부산예술회관 공연장 입장공지 안내 드립니다\n - 할인에 해당하는 증빙자료 미지참 시에는 현장에서 차액을 지불한 후 관람이 가능합니다. \n- 국가유공자, 장애인 본인 및 동반 1인 할인 50% \n - 경로우대 할인 50% \n\n - 단체 (20인이상) 할인 20% \n - 공연문의 : 070-7727-0188',
         file: 'https://www.bmpo.co.kr/_files/ugd/d1667f_ef106bd01fa547b1b3ed1a2f5aede5d8.pdf' 
    },

]




// 프로젝트 정보
const ProjectData = [{
        id: 1,
        title: '2019 찾아가는 음악회',
        date: '19년 6월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_project_01.png`,
        video1: '<iframe width="660" height="415" src="https://www.youtube.com/embed//2T5DYAsL2aU?si=AtVIYol8VkhvolEl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        text:'안녕하세요 2019 찾아가는 음악회 입니다. \n 공연사진과 영상첨부 합니다',
    },
    {
        id: 2,
        title: '제15회 부산국제어린이청소년영화제 "애니메이션 음악회"',
        date: '18년 6월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_project_02.png`,
    },
    {
        id: 3,
        title: '제14회 부산국제어린이청소년영화제 "애니메이션 음악회"',
        date: '16년 6월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_project_03.png`,
    },
    {
        id: 4,
        title: '2015 영화음악 콘서트"',
        date: '15년 6월 10일',
        img1: `${process.env.PUBLIC_URL}/images/yj_project_04.png`,
    },


]

//////// 부터는 정리필요
//////// 부터는 정리필요
//////// 부터는 정리필요
//////// 부터는 정리필요

const BmpoContext2 = createContext();

export const BmpoProvider2 = ({children}) => {

// 슬라이드용 : 처음 5개의 항목만 선택 및 저장
const [data, setData] = useState(ConcertData.slice(0, 5)); 

// 갤러리 데이터 저장  
const [galleryData, setGalleryData] = useState(GalleryData); // GalleryData 상태 추가
const [galleryDataSlice, setGalleryDataSlice] = useState(GalleryData.slice(0, 4)); // GalleryData 몇개만 저장

// 공지사항 데이터 저장
const [noticeData, setNoticeData] = useState(NoticeData);
const [noticeDataSlice, setNoticeDataSlice] = useState(NoticeData.slice(0, 4));

// 프로젝트 데이터 저장 
const [projectData, setProjectData] = useState(ProjectData); // ProjectData 상태 추가
const [projectDataSlice, setProjectDataSlice] = useState(ProjectData.slice(0, 2));  //projectData 몇개만 저장
  return (
    <BmpoContext2.Provider value={{ data, galleryData, galleryDataSlice, projectDataSlice, noticeData, noticeDataSlice, projectData  }}>
      {children}
    </BmpoContext2.Provider>
  )
      
};

export default BmpoContext2;