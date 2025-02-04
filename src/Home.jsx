// 원본파일

import React, { useContext } from "react";

import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import BmpoContext2 from './BmpoContext2'; 
import { LuChevronRight } from "react-icons/lu";

function Home() {
  const { data } = useContext(BmpoContext2); 
  // context에서 슬라이드에 보여줄 data 가져오기

  const limitedData = data.slice(0, 4);
  const limitedDatafor5 = data.slice(0, 5);
  // 슬라이드 : 처음 4개,5개 의 항목만 가져오고 표기
  
  const { galleryDataSlice } = useContext(BmpoContext2); 
  // galleryData 처음4개만 가져오기

  const { noticeDataSlice } = useContext(BmpoContext2); 
  // noticeDataSlice 가져오기
  
  const { projectDataSlice } = useContext(BmpoContext2); 
  // projectData 가져오기
  // const projectDataSlice = projectData.slice(0, 2);
  // 프로젝트 : 처음 2개의 항목만 가져오고 표기

  return (
    <>
    {/* swiper용 styles */}
     <style>
      {`
        .swiper-button-next, .swiper-button-prev {
          color: #fff!important; 
          text-shadow: 0 0 7px black;
        }
      `}
    </style>

      <Swiper
        modules={[Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background: #fff; width: 80px; height: 5px; border-radius: 10px;"></span>`;
          },
        }}
        autoplay={{ delay: 3000 }}
      >
        {limitedData.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide_wrap}>
            <div className={styles.slide_one}>
              <div className={styles.margin_lr}>
                <div className={styles.slide_text_wrap}>
                  <p className={styles.slide_title}>{slide.title}</p>
                  <p className={styles.slide_sub_title}>
                    {slide.performancedate} <span className={styles.slide_sub_sm_title}>{slide.location}</span>
                  </p>
                  <Link to="/Concert">
                    <button className={styles.slide_btn}>{slide.buttonText}</button>
                  </Link>
                </div>
              </div>
              <div className={styles.main_slide_bg}>
                <img src={slide.poster} alt="배경이미지" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


{/* ======== 현재 진행중 공연 ======== */}
{/* ======== 현재 진행중 공연 ======== */}

    <div className={`${styles.sec_con} ${styles.margin_lr}`}>

        <div className={styles.sect_title_wrap}>
            <p className={styles.sect_title}>현재 진행중 공연</p>
            <Link to='/Concert'><p className={styles.more_btn}>더보기<LuChevronRight /></p></Link>
        </div>

        <Swiper
        modules={[Navigation , A11y]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true} 
        navigation
      >
        {limitedDatafor5.map((slide, index) => (
          
          <SwiperSlide key={index} className={styles.slide_wrap}>
            <div className={styles.slide_one}>
              <div className={styles.margin_lr}>
                <div className={styles.slide_text_wrap}>
                  <span className={styles.slide_sub_sm_title}>{slide.location}</span>
                  <p className={styles.slide_title}>{slide.title}</p>
                  <p className={styles.slide_sub_title}>
                    {slide.performancedate} 
                  </p>
                  <Link to="/Concert" className={styles.slide_btn_wrap}>
                    <button className={styles.slide_btn}>{slide.buttonText}</button>
                  </Link>
                </div>
              </div>
              <div className={styles.main_slide_bg}>
                  <p className={styles.d_day}>{slide.dday}</p>
                <img src={slide.poster} alt="배경이미지" />
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
    {/* margin_st END */}
    {/* ======== 현재 진행중 공연 END ======== */}


    {/* ======== 공연 사진 ======== */}
    {/* ======== 공연 사진 ======== */}
    <div className={`${styles.sec_con} ${styles.sec_sepa} ${styles.margin_lr}`}>

    <div className={styles.sec_left}>
      <div className={styles.sect_title_wrap}>
        <p className={styles.sect_title}>공연 사진</p>
        <Link to="/Gallery">
          <p className={styles.more_btn}>더보기<LuChevronRight /></p>
        </Link>
      </div>

      <Link to='/TextInner'> 
        <div className={styles.cont_gal}  >
          {galleryDataSlice.map((item) => (
            <div key={item.id} className={styles.cont_img_wrap}>
              <p className={styles.cont_title}>{item.title}</p>
              <img className={styles.cont_img} src={item.img1} alt="갤러리이미지" />
            </div>
          ))}
        </div>
      </Link>
    </div>

    {/* sec_left END */}
    {/* sec_left END */}




    <div className={styles.sec_right}>
      {/* 공지사항 */}
      <div className={styles.top_noti_wrap}>
        <div className={styles.sect_title_wrap}>
                <p className={styles.sect_title}>공지사항</p>
                <Link to='/Notice'><p className={styles.more_btn}>더보기<LuChevronRight /></p></Link>
        </div>

        <Link to='/NoticeInner'> 
          <div className={styles.cont_noti}  >
            {noticeDataSlice.map((item) => (
              <div key={item.id} className={styles.noti_wrap}>
                <p className={styles.noti_title}>{item.title}</p>
                <p className={styles.noti_date}>{item.date}</p>
              </div>
            ))}
          </div>
        </Link>
      </div>
      {/* 공지사항 END*/}

      {/* 프로젝트 */}
      <div className={styles.btm_noti_wrap}>
        <div className={styles.sect_title_wrap}>
                <p className={styles.sect_title}>프로젝트</p>
                <Link to='/Gallery'><p className={styles.more_btn}>더보기<LuChevronRight /></p></Link>
        </div>

        <Link to='/ProjectInner'> 
          <div className={styles.cont_project}  >
            {projectDataSlice.map((item) => (
              <div key={item.id} className={styles.cont_img_wrap}>
              <p className={styles.cont_title}>{item.title}</p>
              <img className={styles.cont_img} src={item.img1} alt="프로젝트 이미지" />
            </div>
            ))}
          </div>
        </Link>
      </div>
      {/* 프로젝트 END*/}


    </div>
    
    {/* sec_right END */}
    {/* sec_right END */}


    </div>
    {/* ======== 공연 사진 END ======== */}

    </>
  );
};

export default Home;