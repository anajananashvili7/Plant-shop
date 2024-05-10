'use client'
import { useState } from "react";
import Wrapper from "./Wrapper/Wrapper";
import NavItem from "../Navitems/Navitems";
import styles from "./Navigation.module.css"

const Navigation = () => {
    const [open, setOpen] = useState(false); // Corrected variable name to setOpen

    const onOpen = () => {
        console.log(22);

        setOpen(true)
    }

    return (
        <>
            <div className={styles.headerFlex}>
            <div>
                <a style={{ color: "black" }}>Go<span style={{ color: "#36794F" }}>Green</span></a>
            </div>
            <div>
                <img onClick={() => setOpen(true)} src="/menu.svg" alt="menu" width='20' />
            </div>
            </div>

            <Wrapper open={open} setOpen={setOpen}>
                <NavItem>Plants</NavItem>
                <NavItem>Care Tools</NavItem>
                <NavItem>Gifts</NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>
                    <div className={styles.dropdown}>
                        Learn More
                        <div className={styles.dropdownContent}>
                            <a href="#">Summer Plant Care Series</a>
                            <a href="#">Green Living Blog</a>
                            <a href="#">Care Guides</a>
                        </div>
                    </div>
                </NavItem>
            </Wrapper>
        </>
    );
}

export default Navigation;


