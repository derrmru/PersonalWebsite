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

    const [lpairs, setLpairs] = useState([
        [reactImg, "React"], 
        [gatsbyImg, "Gastby"], 
        [pythonImg, "Python"], 
        [nodeImg, "Node JS"], 
        [wordpressImg, "Wordpress"],
        [reduxImg, "Redux"],
        [mongoImg, "Mongo DB"],
        [bootstrapImg, "Bootstrap"]
    ]);

    useEffect(() => {
        let timer = 3000;
        let space = -95;
        let marginal = space;
        let newer = [...lpairs, ...lpairs];
        const interval = setInterval(() => {
            if (lpairs.length > 1 && window.innerWidth <= 680){//having this inside the interval ensures the funcitonality responds to screen width change
                
                setTimeout(() => {
                    document.getElementById(0).style.marginLeft = (marginal + "%");
                    marginal <= 95 ? marginal += 50 : marginal = space;
                }, (timer/2));
            } else {
                document.getElementById(0).style.marginLeft = "0%";
            }
        }, timer)
        return () => clearInterval(interval);
    })

        return (
            <div className={styles.container}>
                {lpairs.map((x, i) => {
                    return (
                        <div id={i} key={i} className={styles.language}>
                            <div className={styles.imageContain}><span><img src={x[0]} alt="logo" /></span></div>
                            <div className={styles.title}>{x[1]}</div>
                        </div>
                    )
                })}
            </div>
        )

}