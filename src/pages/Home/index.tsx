import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./components/Services'));
const Gallery = dynamic(() => import('./components/Gallery'));

const HomePage = () => {
    return (
        <>
            <Services />
            <Gallery />
        </>
    );
};

export default HomePage;
