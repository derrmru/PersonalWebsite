import React from "react"
import screens from "../pages/portfolioItems/screens.svg"
import Img from "gatsby-image"
import styles from "./macpreview.module.css"

export default function MacPreview(props){
    return (
        <div className={styles.macContainer} style={{width: props.width, height: props.height, margin: "auto"}}>
                    <div style={{transition: "1s"}}>
                        <Img fluid={props.fi} className={styles.macImage} />
                        <Img fluid={props.ti} className={styles.tabletImage} />
                        <img src={screens} className={styles.screens} />
                        <Img fluid={props.mi} className={styles.phoneImage} />
                    </div>
                    {props.hovering &&
                        <div style={{opacity: "1", transition: "5s"}} className={styles.findOutMore}>Find out more</div> 
                    }
        </div>
    )
}