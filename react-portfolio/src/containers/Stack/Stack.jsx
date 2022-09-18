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

const Stack = () => {
    return (
        <>
            <SkillContainer
                icon={<FontAwesomeIcon icon={faHtml5} />}
                name={<p>HTML</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faSass} />}
                name={<p>CSS/SASS</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faJs} />}
                name={<p>Javascript</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faReact} />}
                name={<p>React</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faJava} />}
                name={<p>Java</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faGit} />}
                name={<p>Git</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faAws} />}
                name={<p>AWS</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faGoogle} />}
                name={<p>FireBase/FireStore</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faNodeJs} />}
                name={<p>Node</p>}
            />
            <SkillContainer
                icon={<FontAwesomeIcon icon={faDocker} />}
                name={<p>Docker</p>}
            />
        </>
    );
};

export default Stack;
