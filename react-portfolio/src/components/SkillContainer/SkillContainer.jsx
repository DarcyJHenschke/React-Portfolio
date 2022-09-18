import React from "react";
import styles from "./SkillContainer.module.scss";
const SkillContainer = ({ icon, name }) => {
    return (
        <div>
            {icon}
            {name}
        </div>
    );
};

export default SkillContainer;
