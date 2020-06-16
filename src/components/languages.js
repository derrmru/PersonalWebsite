import React from "react"
import styles from "./languages.module.css"
import reactImg from "../images/react.png"
import gatsbyImg from "../images/gatsby.png"
import pythonImg from "../images/python.png"
import nodeImg from "../images/node.png"
import wordpressImg from "../images/wordpress.png"
import mongoImg from "../images/mongo.png"
import bootstrapImg from "../images/bootstrap.png"
import reduxImg from "../images/redux.png"

export default function Languages(){

    return (
    <div className={styles.container}>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={reactImg} alt="logo" /></span></div>
            <div className={styles.title}>React</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={gatsbyImg} alt="logo" /></span></div>
            <div className={styles.title}>Gatsby</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={pythonImg} alt="logo" /></span></div>
            <div className={styles.title}>Python</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={nodeImg} alt="logo" /></span></div>
            <div className={styles.title}>Node JS</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={wordpressImg} alt="logo" /></span></div>
            <div className={styles.title}>Wordpress</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={reduxImg} alt="logo" /></span></div>
            <div className={styles.title}>Redux</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={mongoImg} alt="logo" /></span></div>
            <div className={styles.title}>Mongo DB</div>
        </div>
        <div className={styles.language}>
            <div className={styles.imageContain}><span><img src={bootstrapImg} alt="logo" /></span></div>
            <div className={styles.title}>Bootstrap</div>
        </div>
    </div>
    )
}