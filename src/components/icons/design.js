import React from "react"
import styles from "./services.module.css"

export default function Design(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.pencil}><div className={styles.ridge}></div></div>
                <div className={styles.nib}></div>
            </div>
            <p>{props.hl}</p>
        </div>
    )
}