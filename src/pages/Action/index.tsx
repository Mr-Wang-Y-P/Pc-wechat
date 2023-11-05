import React from "react";
import styles from "./index.module.scss";
export default function Action() {
  return (
    <div className={styles.action}>
      <div className={styles.actionBg}>
       <img className="w-full h-full object-fill" src="https://img.win3000.com/m00/2a/a5/a9db23a55a1eb119a950d2c173b7ea26.png" alt="" />
      </div>
      <div className={styles.actionContent}>
        <div className={styles.actionHeader}>
          <div className={styles.actionTitle}>
            <div>Win</div>
            <div>不负韶华</div>
          </div>
          <div className={styles.actionLogo}>
            <img
              src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
              alt=""
            />
          </div>
        </div>
        <div className='mx-[5%] flex flex-col relative top-[-120px]'>
          <div className="m-4">
            <div className="flex">
              <img
                className="w-[60px] h-[60px] rounded-full mr-6"
                src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
                alt=""
              />
              <div className="flex flex-col flex-1">
                <div className="mb-2">Win</div>
                <div className="mb-2">听海的声音！❤</div>
                <div className="flex">
                  <img
                    className="object-fill"
                    src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <span>7分钟</span>
                  <span>...</span>
                </div>
               
              </div>
             
            </div>
            <hr className="mt-4"/>
          </div>
          <div>
            <div className="flex">
              <img
                className="w-[60px] h-[60px] rounded-full mr-6"
                src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
                alt=""
              />
              <div className="flex flex-col flex-1">
                <div className="mb-2">Win</div>
                <div className="mb-2">听海的声音！❤</div>
                <div className="flex">
                  <img
                    className="object-fill"
                    src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <span>7分钟</span>
                  <span>...</span>
                </div>
               
              </div>
             
            </div>
            <hr className="mt-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}
