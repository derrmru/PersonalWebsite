import React from "react"
import git from "../images/github.svg"
import insta from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import styles from "./social.module.css"

export default function Social(props){
    return (
        <div>
            <h3>Social</h3>
            <div className={styles.socialIcons}>
                <div><a href="https://github.com/derrmru" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin link" width={props.width} /></a></div>
                <div><a href="https://github.com/derrmru" target="_blank" rel="noreferrer"><img src={insta} alt="instagram link" width={props.width} /></a></div>
                <div><a href="https://github.com/derrmru" target="_blank" rel="noreferrer"><img src={git} alt="github link" width={props.width} /></a></div>
            </div>
        </div>
    )
}