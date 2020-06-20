import React, {useEffect, useState} from "react"
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

    let lpairs = [
        [reactImg, "React"], 
        [gatsbyImg, "Gastby"], 
        [pythonImg, "Python"], 
        [nodeImg, "Node JS"], 
        [wordpressImg, "Wordpress"],
        [reduxImg, "Redux"],
        [mongoImg, "Mongo DB"],
        [bootstrapImg, "Bootstrap"]
    ];

        return (
            <div className={styles.container}>
                {lpairs.map((x, i) => {
                    return (
                        <div key={i} className={styles.language}>
                            <div className={styles.imageContain}><span><img src={x[0]} alt="logo" /></span></div>
                            <div className={styles.title}>{x[1]}</div>
                        </div>
                    )
                })}
            </div>
        )

}