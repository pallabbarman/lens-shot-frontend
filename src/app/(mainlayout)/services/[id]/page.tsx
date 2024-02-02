import Service from '@/_pages/Service';

interface ServicePageProps {
    params: { id: string };
}

const ServicePage = ({ params }: ServicePageProps) => {
    return <Service id={params.id} />;
};

export default ServicePage;
