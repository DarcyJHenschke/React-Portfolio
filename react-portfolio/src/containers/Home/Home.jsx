import React from "react";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <section className={styles.Main}>
                <div className={styles.MainWrapper}>
                    <h1 className={styles.Heading}>Darcy Henschke</h1>
                    <h2 className={styles.SubHeading}>Full-Stack Developer</h2>
                    <p className={styles.Paragraph}>
                        I develop front-end and back-end software solutions for
                        "X" company in Australia. Currently I'm focussed on
                        becoming a Nologist with _Nology.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
