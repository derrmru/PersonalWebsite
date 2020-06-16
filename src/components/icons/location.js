import React from "react"
import styles from "./icons.module.css"

export default function Location(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.circle}></div>
                <div className={styles.whiteCircle}></div>
                <div className={styles.locationTriangle}></div>
            </div>
            <p>{props.address}</p>
        </div>
    )
}