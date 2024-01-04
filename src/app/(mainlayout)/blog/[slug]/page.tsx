import abc from '@/assets/1.jpg';
import BlogItem from '@/components/BlogItem';

interface BlogProps {
    params: { slug: number };
}

const Blog = ({ params }: BlogProps) => {
    return (
        <BlogItem img={abc} title="Wedding nulla sapien" label="Fashion">
            Luroin non lorem ac erat suscipit bibendum. Nulla facilisi. Sedeuter
            nunc volutpat, mollis sapien vel, conseyer turpeutionyer masin
            libero semper. Fusceler mollis augue sit amet hendrerit vestibulum.
            Duisteyerionyer evenena lacus. Fusce mollis augue sit amet hendrerit
            vestibulum. Duisteyerionyer venenatis lacus. Quisque gravida eros ut
            turpis interdum ornare. Interdum et malesu they adamale fames ac
            ante ipsum primis inno faucibus. Curabitur arcu erosite feugiat in
            tortor in, volutpat sollicitudin libero. Maecenas nisl est conselur
            rhoncus loremir consequat et, finibus nec purus. Yuroin non lorem ac
            erat suscipit bibendum. Nulla facilisi. Sedeuter nunc volutpat,
            mollis sapien veli conseyer turpeutionyer massa in libero semper
            sedeuter nunc volutpat, mollis sapien veletion.
        </BlogItem>
    );
};

export default Blog;
