import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./components/Banner'));
const Services = dynamic(() => import('./components/Services'));
const Gallery = dynamic(() => import('./components/Gallery'));
const Price = dynamic(() => import('./components/Price'));
const Blog = dynamic(() => import('./components/Blog'));
const Faq = dynamic(() => import('./components/Faq'));

const HomePage = () => {
    return (
        <>
            <Banner />
            <Services />
            <Gallery />
            <Price />
            <Blog />
            <Faq />
        </>
    );
};

export default HomePage;
