import React from "react"
import styles from "./banner.module.css"

export default function Banner(){
    return (
    <div className={styles.container}>
        <div className={styles.leftBorder}></div>
        <div className={styles.text}>
            <div className={styles.tagline}>Bespoke. Progressive. Modern.</div>
            <div className={styles.subtitle}>Customized Web Development, Built For Your Needs</div>
        </div>
    </div>
    )
}