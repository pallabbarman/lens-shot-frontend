import BlogItem from '@/components/BlogItem';
import MainLayout from '@/layouts/Main';

interface BlogProps {
    params: { slug: number };
}

const Blog = ({ params }: BlogProps) => {
    return (
        <MainLayout>
            <BlogItem />
        </MainLayout>
    );
};

export default Blog;
