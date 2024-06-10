import React from "react";
import styles from "../componentsStyles/header.module.css"
const Header = () => {
    return(
        <>
        <div className={styles.body}>
            <div className={styles.headerContainer}>
                <img src="toolbox-icon.png" alt="Site icon" className={styles.siteImg}></img>
                <h1 className={styles.siteName}>ToolBox</h1>
            </div>
        </div>
        </>
    )
}

export default Header