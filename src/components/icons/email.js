import React from "react"
import styles from "./icons.module.css"

export default function Email(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.envelope}></div>
                <div className={styles.triangle}></div>
            </div>
            <p>{props.email}</p>
        </div>
    )
}