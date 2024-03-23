// pages/about.js
import React from 'react';
import styles from './About.module.css'; // Import CSS module for styling
import Header from '../component/Header';

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.heading}>About Me</h1>
                <div className={styles.content}>
                    <p className={styles.intro}>
                        Hi there! I&apos;m <span className={styles.name}>Hafidh</span>, a passionate software engineer with a variety of experience in different technologies. I have <span className={styles.experience}>2</span> years of experience in developing robust and scalable web applications using a range of tools and frameworks.
                    </p>
                    <div className={styles.skills}>
                        <h2>Skills:</h2>
                        <ul>
                            <li>Go</li>
                            <li>MySQL</li>
                            <li>React.js & Next.js</li>
                            <li>Laravel</li>
                            <li>Software Integration Testing (SIT)</li>
                            <li>Automation Testing</li>
                            <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                        </ul>
                    </div>
                    <p>
                        Throughout my career, I&apos;ve had the opportunity to work on diverse projects, from building RESTful APIs with Go and Laravel to developing interactive user interfaces with React.js. I&apos;m proficient in database management and optimization with MySQL, ensuring high performance and reliability of applications.
                    </p>
                    <p>
                        I have a strong foundation in software testing methodologies, including software integration testing (SIT) and automation testing, using tools like [mention specific testing tools or frameworks]. Additionally, I&apos;m experienced in implementing CI/CD pipelines to automate the deployment process, enabling rapid and reliable delivery of software.
                    </p>
                    <p>
                        I&apos;m passionate about leveraging technology to solve complex problems and deliver innovative solutions. I thrive in dynamic environments where I can collaborate with cross-functional teams to deliver high-quality software products.
                    </p>
                    <p>
                        Feel free to reach out to me if you&apos;d like to connect or discuss potential opportunities for collaboration.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
