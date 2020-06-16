import React from "react"
import styles from "./phone.module.css"

export default function Phone(){
    return (
        <div className={styles.container}>
            <div className={styles.lid}></div>
            <div className={styles.image}></div>
            <div className={styles.screen}></div>
            <div className={styles.topLine}></div>
            <hr className={styles.line} />
            <div className={styles.home}></div>
        </div>
    )
}