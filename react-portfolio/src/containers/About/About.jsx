import React from "react";
import styles from "./About.module.scss";
const About = () => {
    return (
        <section className={styles.Main}>
            <h2 className={styles.Heading}>About Me</h2>
            <div className={styles.About}>
                <div className={styles.AboutWrapper}>
                    <p className={styles.Paragraph}>
                        I'm Darcy, a civil-engineer turned full stack developer
                        currently based in Melbourne.
                    </p>
                    <p className={styles.Paragraph}>
                        I began my career as a full-stack devloper in 2022 when
                        I was selected to undertake the _Nology tech consultancy
                        programme. Prior to this I was a full time engineering
                        student at RMIT and also a table games dealer at Crown
                        Casino Melbourne.
                    </p>
                    <p className={styles.Paragraph}>
                        Besides software developement I enjoy playing tennis and
                        golf, watching the NBA and UFC, putting hours on my
                        jetski and investing in stocks and crypto.
                    </p>
                </div>
                <div className={styles.ImgWrapper}>
                    <img className={styles.Img} src="" alt="" />
                </div>
            </div>
        </section>
    );
};

export default About;
