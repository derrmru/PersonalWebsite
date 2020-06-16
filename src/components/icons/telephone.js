import React from "react"
import styles from "./icons.module.css"

export default function Telephone(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.case}></div>
                <div className={styles.speaker}></div>
                <div className={styles.screen}></div>
                <div className={styles.homeButton}></div>
            </div>
            <p>{props.telephone}</p>
        </div>
    )
}