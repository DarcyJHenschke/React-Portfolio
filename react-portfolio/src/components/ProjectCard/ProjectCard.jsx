import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ img, title, description, stack, repo, link }) => {
    console.log(stack);
    return (
        <div className={styles.ProjectCard}>
            <div>
                <img className={styles.Img} src={img} />
            </div>
            <div className={styles.TextWrapper}>
                <div>
                    <h2 className={styles.Title}>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.Stack}>{stack}</div>
                <div className={styles.LinkWrapper}>
                    {repo}
                    {link}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

// check
