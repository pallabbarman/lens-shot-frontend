import dynamic from 'next/dynamic';

const AboutUs = dynamic(() => import('./components/AboutUs'));
const Team = dynamic(() => import('./components/Team'));

const About = () => {
    return (
        <>
            <AboutUs />
            <Team />
        </>
    );
};

export default About;
