import React from "react";
import styles from "./Stack.module.scss";
import SkillContainer from "../../components/SkillContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDocker,
    faGoogle,
    faHtml5,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faDatabase,
    faKeyboard,
    faLeaf,
} from "@fortawesome/fontawesome-free-solid";

const Stack = () => {
    return (
        <div className={styles.SkillContainer}>
            <SkillContainer
                icon={
                    <FontAwesomeIcon className={styles.Icon} icon={faHtml5} />
                }
                name={<p className={styles.Name}>HTML</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faSass} />}
                name={<p className={styles.Name}>CSS/SASS</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faJs} />}
                name={<p className={styles.Name}>Javascript</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon className={styles.Icon} icon={faReact} />
                }
                name={<p className={styles.Name}>React</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faJava} />}
                name={<p className={styles.Name}>Java</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faGit} />}
                name={<p className={styles.Name}>Git</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faAws} />}
                name={<p className={styles.Name}>AWS</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon className={styles.Icon} icon={faGoogle} />
                }
                name={<p className={styles.Name}>FireBase/FireStore</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon className={styles.Icon} icon={faNodeJs} />
                }
                name={<p className={styles.Name}>NodeJs</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon className={styles.Icon} icon={faDocker} />
                }
                name={<p className={styles.Name}>Docker</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon
                        className={styles.Icon}
                        icon={faDatabase}
                    />
                }
                name={<p className={styles.Name}>SQL</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faLeaf} />}
                name={<p className={styles.Name}>SpringBoot</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon className={styles.Icon} icon={faCode} />}
                name={<p className={styles.Name}>NestJs</p>}
            />
            <SkillContainer
                icon={
                    <FontAwesomeIcon
                        className={styles.Icon}
                        icon={faKeyboard}
                    />
                }
                name={<p className={styles.Name}>Typescript</p>}
            />
        </div>
    );
};

export default Stack;
