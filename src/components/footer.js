import React from "react"
import styles from "./footer.module.css"
import Location from "../components/icons/location"
import Telephone from "../components/icons/telephone"
import Email from "../components/icons/email"
import Social from "../components/social"

export default function Footer(){
    const language = window.navigator.language;

    return (
        <div className={styles.container}>
            <div className={styles.central}>
                <div className={styles.footerSocial}>
                    <h3>Contact</h3>
                        {language === 'fr' ?
                        <div>
                            <Telephone telephone="+3378073049" />
                            <Email email="peter@thepetersweeney.com" />
                            <Location address="108 Coet Nouzic, Locmalo, France 56160" />
                        </div>
                        :
                        <div>
                            <Telephone telephone="+447593084393" />
                            <Email email="peter@thepetersweeney.com" />
                            <Location address="10 Oakley Gardens, London, SW3 5QG" />
                        </div>
                        }
                </div>
                <div className={styles.footerSocial}>
                    <Social width="30px" />
                </div>
            </div>
            <div className={styles.legal}>
                <div>©Peter Sweeney 2020</div>
                <div> | </div>
                <div><a href="./privacy-policy">Privacy Policy</a></div>
            </div>
        </div>
    )
}