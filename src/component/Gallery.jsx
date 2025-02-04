// 원본
import React, { useContext, useState } from "react";
import styles from "./css/Gallery.module.css";
import BmpoContext2 from "../BmpoContext2";
import { Link } from "react-router-dom";

function Gallery() {
  const { galleryData } = useContext(BmpoContext2); // galleryData 가져오기
  const { projectData } = useContext(BmpoContext2);
  // projectData 가져오기
  const [activeTab, setActiveTab] = useState("gallery"); // 기본값으로 'gallery' 설정

  return (
    <div className={`${styles.gallery} ${styles.margin_tb80} ${styles.margin_lr}`}>
      <div className={styles.sect_title_wrap}>
        <p className={styles.sect_title}>갤러리</p>
      </div>

      {/* 갤러리 탭 메뉴 선택 */}
      <div className={styles.sel_wrap}>
        <p
          className={`${styles.sel_wrap_title} ${
            activeTab === "gallery" ? styles.on : ""
          }`}
          onClick={() => setActiveTab("gallery")}
        >
          갤러리
        </p>
        <p
          className={`${styles.sel_wrap_title} ${
            activeTab === "project" ? styles.on : ""
          }`}
          onClick={() => setActiveTab("project")}
        >
          프로젝트
        </p>
      </div>

      {/* 갤러리 탭 메뉴 */}
      {activeTab === "gallery" && (
        <div className={styles.tab1}>
          <Link to="/TextInner">
            <div className={styles.cont_gal}>
              {galleryData.map((item) => (
                <div key={item.id} className={styles.cont_img_wrap}>
                  <p className={styles.cont_title}>{item.title}</p>
                  <img
                    className={styles.cont_img}
                    src={item.img1}
                    alt="갤러리이미지"
                  />
                </div>
              ))}
            </div>
          </Link>
        </div>
      )}

      {/* 프로젝트 탭 메뉴 */}
      {activeTab === "project" && (
        <div className={styles.tab2}>
          <Link to="/ProjectInner">
            <div className={styles.cont_gal}>
              {projectData.map((item) => (
                <div key={item.id} className={styles.cont_img_wrap}>
                  <p className={styles.cont_title}>{item.title}</p>
                  <img
                    className={styles.cont_img}
                    src={item.img1}
                    alt="프로젝트이미지"
                  />
                </div>
              ))}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Gallery;
