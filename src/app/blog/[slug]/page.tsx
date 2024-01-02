import BlogItem from '@/components/BlogItem';
import MainLayout from '@/layouts/Main';

interface BlogProps {
    params: { slug: number };
}

const Blog = ({ params }: BlogProps) => {
    return (
        <MainLayout>
            <h1>{params.slug}</h1>
            <BlogItem />
        </MainLayout>
    );
};

export default Blog;
