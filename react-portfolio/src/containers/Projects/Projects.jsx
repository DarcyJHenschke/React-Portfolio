import React from "react";
import ProjectCard from "../../components/ProjectCard";
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faHtml5,
    faJs,
    faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import calc from "./../../assets/imgs/calculator.png";
import books from "./../../assets/imgs/googleBooks.png";
import morse from "./../../assets/imgs/morseCoder.png";

const Projects = () => {
    return (
        <div className={styles.Projects}>
            <h1>Projects</h1>
            <ProjectCard
                img={calc}
                title={"Javascript Calculator"}
                description={
                    "A Basic calculator built using Javascript, HTML and SCSS. This Calculator can handle standard mathematical operations aswell as decimals."
                }
                stack={[
                    <FontAwesomeIcon className={styles.Icon} icon={faHtml5} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faJs} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faSass} />,
                ]}
                repo={
                    <a href="https://github.com/DarcyJHenschke/JavaScript-Calculator">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGithub}
                        />
                    </a>
                }
                link={
                    <a href="https://darcyjhenschke.github.io/JavaScript-Calculator/">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGoogle}
                        />
                    </a>
                }
            />
            <ProjectCard
                img={books}
                title={"Google Books UI"}
                description={
                    "A website that allows users to search for books. This is powered by the google books API"
                }
                stack={[
                    <FontAwesomeIcon className={styles.Icon} icon={faHtml5} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faJs} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faSass} />,
                ]}
                repo={
                    <a href="https://github.com/DarcyJHenschke/Google-Books_UI">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGithub}
                        />
                    </a>
                }
                link={
                    <a href="https://darcyjhenschke.github.io/Google-Books_UI/">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGoogle}
                        />
                    </a>
                }
            />
            <ProjectCard
                img={morse}
                title={"Morse Code Translator"}
                description={
                    "An application that allows users to input text or morsecode and translate it to the opposite language"
                }
                stack={[
                    <FontAwesomeIcon className={styles.Icon} icon={faHtml5} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faJs} />,
                    <FontAwesomeIcon className={styles.Icon} icon={faSass} />,
                ]}
                repo={
                    <a href="https://github.com/DarcyJHenschke/Morse-Coder">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGithub}
                        />
                    </a>
                }
                link={
                    <a href="https://darcyjhenschke.github.io/Morse-Coder/">
                        <FontAwesomeIcon
                            className={styles.Links}
                            icon={faGoogle}
                        />
                    </a>
                }
            />
        </div>
    );
};

export default Projects;
