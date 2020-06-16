import React, {useEffect, useState, useRef} from "react"
import styles from "./computer.module.css"

export default function Computer(){
    const [count, setCount] = useState(0);
    const countRef = useRef(count);
    let toBeTyped = window.location.pathname + "..."; //page slug

    useEffect(() => { // Type slug into icon
        const interval = setInterval(() => {
            countRef.current += 1;
            setCount(countRef.current)
            //console.log("ref = " + countRef.current)
            if (countRef.current === toBeTyped.length) {
                clearInterval(interval)
            }
        }, 400);
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className={styles.outline}></div>
            <div className={styles.screen}>./{toBeTyped.substr(1, count)}</div>
            <div className={styles.stand}></div>
            <div className={styles.keyboard}>
                <div className={styles.keys}></div>
                <div className={styles.keysTwo}></div>
            </div>
        </>
    )
}