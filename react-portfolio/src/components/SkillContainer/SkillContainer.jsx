import React from "react";
import styles from "./SkillContainer.module.scss";
const SkillContainer = ({ icon, name }) => {
    return (
        <div className={styles.Skill}>
            {icon}
            {name}
        </div>
    );
};

export default SkillContainer;
