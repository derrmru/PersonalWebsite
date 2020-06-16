import React from "react"
import styles from "./services.module.css"

export default function Seo(props){
    return (
        <div className={styles.inline}>
            <div className={styles.border}>
                <div className={styles.magnify}>
                    <p className={styles.iconText}><strong>SEO</strong></p>
                </div>
                <div className={styles.handle}></div>
                <div className={styles.grip}></div>
            </div>
            <p>{props.hl}</p>
        </div>
    )
}