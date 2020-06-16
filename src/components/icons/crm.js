import React from "react"
import styles from "./services.module.css"

export default function Crm(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.crmBorder}>
                    <div className={styles.leftBorder}>----</div>
                    <div className={styles.topBorder}></div>
                    <p className={styles.crmTitle}><strong>CRM</strong></p>
                </div>
            </div>
            <p>{props.hl}</p>
        </div>
    )
}