import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterWrapper}>
                <a
                    className={styles.Link}
                    href="mailto: darcyhenschke@gmail.com"
                >
                    <FontAwesomeIcon
                        className={styles.Icon}
                        icon={faEnvelope}
                    />
                    <p>Email</p>
                </a>

                <a
                    className={styles.Link}
                    href="https://github.com/DarcyJHenschke"
                >
                    <FontAwesomeIcon className={styles.Icon} icon={faGithub} />
                    <p>Github</p>
                </a>

                <a
                    className={styles.Link}
                    href="www.linkedin.com/in/darcy-henschke-3b55b41b5"
                >
                    <FontAwesomeIcon
                        className={styles.Icon}
                        icon={faLinkedin}
                    />
                    <p>LinkedIn</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
