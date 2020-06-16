import React, {useState} from "react"
import styles from "./navigation.module.css"
import Computer from "./icons/computer"
import Cross from "./icons/cross"

export default function Nav() {
    const [menuOn, setMenuOn] = useState(false);

    const pages = [
        <a href="./contact">Contact</a>,
        <a href="./projects">Projects</a>,
        <a href="./about">About</a>,
        <a href="./">Home</a>
    ]

   return (
        <nav>
            <div id="logo-title">
                <a href="./">
                <div className={styles.iconContainer}><Computer /></div>
                <div className={styles.title}>Peter Sweeney</div>
                </a>
            </div>
            { menuOn === false ?
            <ul>
                <div className={styles.menuOn} onClick={() => setMenuOn(true)} onKeyDown={(ev) => ev.keyCode === 13 && this.focus}>Menu</div>
            </ul>
            :
            <>
            <ul>
            <div className={styles.menuOn} onClick={() => setMenuOn(false)} onKeyDown={(ev) => ev.keyCode === 13 && this.focus}><Cross /></div>
                {pages.map((x, key) => <li key={key}>{x}</li>)}
            </ul> 
            </> }
        </nav>
   )
}