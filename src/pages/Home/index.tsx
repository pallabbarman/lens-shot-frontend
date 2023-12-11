import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./components/Services'));
const Gallery = dynamic(() => import('./components/Gallery'));
const Blog = dynamic(() => import('./components/Blog'));

const HomePage = () => {
    return (
        <>
            <Services />
            <Gallery />
            <Blog />
        </>
    );
};

export default HomePage;
