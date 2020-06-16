import React from "react"
import styles from "./services.module.css"

export default function Responsive(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.case}>
                    <div className={styles.speaker}></div>
                    <div className={styles.mobileScreen}></div>
                    <div className={styles.homeButton}></div>
                </div>
            </div>
            <p>{props.hl}</p>
        </div>
    )
}