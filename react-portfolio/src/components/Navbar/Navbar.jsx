import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [hover, setHover] = useState(false);
    const mouseHover = () => {
        setHover(true);
    };
    const mouseUnHover = () => {
        setHover(false);
    };

    const Routes = {
        color: hover ? "rgb(255, 149, 5)" : "rgb(63, 71, 57)",
        fontStyle: "none",
        textDecoration: "none",
        listStyle: "none",
        border: "0.3vh solid #ff9505",
        padding: "4px",
        borderRadius: "6px",
        fontWeight: "200",
    };

    return (
        <nav sty className={styles.Nav}>
            <div className={styles.Logo}>
                <Link className={styles.LogoLink} to="/">
                    <p>
                        <span className={styles.LogoText}>&lt;</span>
                        <span className={styles.D}>D</span>
                        <span className={styles.LogoText}>H</span>
                        <span className={styles.LogoText}>&#47;&gt;</span>
                    </p>
                </Link>
                <p>
                    <span className={styles.FirstName}>Darcy</span>
                    <span className={styles.LastName}>Henschke</span>
                </p>
            </div>
            <ul className={styles.LinkList}>
                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                    to="/"
                >
                    Home
                </Link>

                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                    to="/about"
                >
                    About
                </Link>

                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                    to="/stack"
                >
                    Stack
                </Link>

                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                    to="/projects"
                >
                    Projects
                </Link>

                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                    to="/contact"
                >
                    Contact
                </Link>

                <Link
                    style={Routes}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseUnHover}
                >
                    Resume
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
