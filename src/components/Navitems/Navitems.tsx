'use state'
import React from "react";
import styles from "./Navitems.module.css"

type NavItemProps = {
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
    return (
        <div className={`${styles.container} ${styles.hoverEffect}`}>
            {children}
        </div>
    )
}

export default NavItem;