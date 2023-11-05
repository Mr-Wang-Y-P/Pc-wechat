import React from 'react'
import styles from './index.module.scss'
export default function Action() {
  return (
    <div className={styles.action}>
      <div className={styles.actionBg}>
        背景
      {/* <img src="" alt="" /> */}
      </div>
      <div className={styles.actionContent}>
        <div className={styles.actionBody}>
          <div className={styles.actionTitle}>
            <div>
              Win
            </div>
            <div>
              不负韶华
            </div>
          </div>
          <div className={styles.actionLogo}>
          <img
            src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  )
}
