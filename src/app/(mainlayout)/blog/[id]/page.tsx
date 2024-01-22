import Blog from '@/_pages/Blog';

interface BlogProps {
    params: { id: string };
}

const BlogPage = ({ params }: BlogProps) => {
    return <Blog id={params.id} />;
};

export default BlogPage;
