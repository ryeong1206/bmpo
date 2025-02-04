import React, { useContext, useState } from "react";
import styles from './css/TextInner.module.css';
import BmpoContext2 from '../BmpoContext2';
import { Link } from 'react-router-dom';
import { MdChevronRight } from "react-icons/md";

function TextInner() {
  const { galleryData } = useContext(BmpoContext2); // galleryData 가져오기
//   const { projectData } = useContext(BmpoContext2); // projectData 가져오기
//   const { noticeData } = useContext(BmpoContext2); // noticeData 가져오기

 // 첫 번째 요소 가져오기
 const firstItem = galleryData[0];

  return (
    <div className={`${styles.margin_tb80} ${styles.margin_lr}`}>

          <div className={styles.sect_title_wrap}>
            <p className={styles.sect_title}>갤러리</p>
          </div>

          <div className={styles.top_wrap}>
            <Link to="/Gallery">
                <p className={styles.return_btn}>
                <MdChevronRight style={{ transform: 'rotateY(180deg)',  fontSize: '15px'}} />
                목록으로 돌아가기</p>
            </Link>
          </div>
        {/* 첫번째 요소만 가져옴 */}
         {firstItem && (
          <>
              <div className={styles.text_top_wrap}>
                  <p className={styles.title}>
                    {firstItem.title}
                  </p>
                  <p className={styles.date}>
                    {firstItem.date}
                  </p>
                  
              </div>
            <div className={styles.text_btm_wrap}>
           
              <p className={styles.intext}>
                {firstItem.text}
              </p>
           

              {firstItem.video1 && (
                <div className={styles.video_wrap}>
                  <div
                    className={styles.video}
                    dangerouslySetInnerHTML={{ __html: firstItem.video1 }}
                  />
                </div>
            )}
            {firstItem.img1 && (
                <div className={styles.image_wrap}>
                  <img src={firstItem.img1} alt={firstItem.title} className={styles.image} />
                </div>
              )}
            
           </div>
              

           </>
            )}
         






      </div>
  );
}

export default TextInner;
