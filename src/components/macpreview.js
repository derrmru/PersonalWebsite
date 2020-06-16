import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./macpreview.module.css"

export default function MacPreview(props){
    return (
        <>
            <div style={props.hovering ? {border: "solid 1px white", transition: "3s"} : {opacity: "1"}} className={styles.macOutline}>
                <div style={props.hovering ? {backgroundColor: "white", transition: "3s"} : {opacity: "1"}} className={styles.macScreen}>
                    <Img fluid={props.fi} />
                    {props.hovering ? <div style={{color: "#053B06", transition: "5s"}} className={styles.findOutMore}>Find out more</div> : <></>}
                </div>
            </div>
            <div className={styles.standContainer}>
                <div style={props.hovering ? {border: "solid 1px white", boxShadow: "0 5px 10px rgb(90, 90, 90)", transition: "3s"} : {opacity: "1"}} className={styles.macStand}>
                    <div style={props.hovering ? {backgroundColor: "white", transition: "3s"} : {opacity: "1"}} className={styles.macBase}></div>
                </div>
            </div>
        </>
    )
}