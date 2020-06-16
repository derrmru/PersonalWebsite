import React, {useState, useEffect} from "react"
import styles from "./laptop.module.css"
import ltImg from "../images/laptop.png"

export default function Laptop() {

    const [screenContent, setScreenContent] = useState(null);

    useEffect(() => {
        const text = '<h1>Hello World</h1>\n<div>This is a React component</div>\n' + 
        '<div>Perhaps you would like this on your website</div>\n' +
        '<div>If you do, follow the below steps:</div>\n' +
        '<ul>\n' +
        '  <li>Give me a call to discuss your project</li>\n' +
        '  <li>Drop me an email and get the ball rolling</li>\n' +
        '  <li>You could also try social media</li>\n' +
        '</ul>';
        let textLength = text.length;
        window.addEventListener("scroll", scroller);

        function scroller(){
            let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 2.9;
            let length = Math.round(scrollpercent * textLength);
            setScreenContent(text.substr(0, length));
        }
    })

    return (
    <div className={styles.container}>
        <div className={styles.imgPosition}>
            <div className={styles.screen}>
                {screenContent}
            </div>
            <img className={styles.laptop} src={ltImg} alt="laptop image" />
        </div>
    </div>
    )
}