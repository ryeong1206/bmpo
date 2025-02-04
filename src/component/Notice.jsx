// 원본

import React, { useContext } from "react";
import styles from './css/Notice.module.css';
import BmpoContext2 from '../BmpoContext2';
import { Link } from 'react-router-dom';

function Notice() {
  const { noticeData } = useContext(BmpoContext2);

  return (
    <div className={`${styles.notice} ${styles.margin_tb80} ${styles.margin_lr}`}>
      <div className={styles.sect_title_wrap}>
        <p className={styles.sect_title}>공지사항</p>
      </div>

        <p className={styles.num_text}>
          총 <span>{noticeData.length}</span>건
        </p>

        {/* 공지글 */}
        <div className={styles.line_wrap}>
            <div className={styles.line_index}>
                <p className={styles.title_le}>제목</p>
                <p className={styles.title_ri}>등록일</p>
            </div>

            {noticeData.map((item) => (
                <Link to='/NoticeInner'>
                <div key={item.id} className={styles.text_index}>
                    <p className={styles.text_le}>{item.title}</p>
                        <p className={styles.text_ri}>{item.date}</p>
                </div></Link>
                ))}
                    
        </div>
    
    </div>
  );
}

export default Notice;
